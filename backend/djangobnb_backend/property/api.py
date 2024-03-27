from django.http import JsonResponse
from rest_framework_simplejwt.tokens import AccessToken

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .forms import PropertyForm
from .models import Property, Reservation
from useraccount.models import User
from .serializers import PropertiesListSerializer, PropertiesDetailSerializer, ReservationsListSerializer


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    """ List all the properties """

    # This is necessary because only logged users can
    # fav a property
    try:
        token = request.META['HTTP_AUTHORIZATION'].split('Bearer ')[1]
        token = AccessToken(token)
        user_id = token.payload['user_id']
        user = User.objects.get(pk=user_id)
    except Exception as e:
        user = None

    favorites = []
    properties = Property.objects.all()

    # host_id is coming like this -> /api/properties/?host_id=efba70a3
    if host_id := request.GET.get('host_id', ''):
        properties = properties.filter(host_id=host_id)

    # If the user is logged, so he can fav a property
    if user:
        for property in properties:
            if user in property.favorited.all():
                favorites.append(property.id)

    serializer = PropertiesListSerializer(properties, many=True)

    return JsonResponse({
        'data': serializer.data,
        'favorites': favorites
    })


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def property_detail(request, pk):
    property = Property.objects.get(pk=pk)
    serializer = PropertiesDetailSerializer(property, many=False)

    return JsonResponse(serializer.data)


@api_view(['POST', 'FILES'])
def create_property(request):
    form = PropertyForm(request.POST, request.FILES)
    if form.is_valid():
        property = form.save(commit=False)
        property.host = request.user
        property.save()

        return JsonResponse({'success': True})
    else:
        print('error', form.errors, form.non_field_errors)
        return JsonResponse({'errors': form.errors.as_json()}, status=400)


@api_view(['POST'])
def book_property(request, pk):
    try:
        start_date = request.POST.get('start_date', '')
        end_date = request.POST.get('end_date', '')
        number_of_nights = request.POST.get('number_of_nights', '')
        total_price = request.POST.get('total_price', '')
        guests = request.POST.get('guests', '')

        property = Property.objects.get(pk=pk)

        Reservation.objects.create(
            property=property,
            start_date=start_date,
            end_date=end_date,
            number_of_nights=number_of_nights,
            total_price=total_price,
            guests=guests,
            created_by=request.user
        )
        return JsonResponse({'success': True})
    except Exception as e:
        print(f'Error -> {e}')
        return JsonResponse({'success': False})


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def property_reservations(request, pk):
    """List the reservations of a property"""
    property = Property.objects.get(pk=pk)
    reservations = property.reservations.all()

    serializer = ReservationsListSerializer(reservations, many=True)

    return JsonResponse(serializer.data, safe=False)


@api_view(['POST'])
def toggle_favorite(request, pk):
    property = Property.objects.get(pk=pk)
    if request.user in property.favorited.all():
        property.favorited.remove(request.user)
        return JsonResponse({'is_favorite': False})
    property.favorited.add(request.user)
    return JsonResponse({'is_favorite': True})
