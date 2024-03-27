from django.contrib import admin

from .models import Property, Reservation


@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ['title', 'price_per_night', 'bedrooms', 'guests', 'category', 'country']
    list_filter = ['country', 'category', 'host']
    search_fields = ['title', 'category', 'country']

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ['property_title', 'start_date', 'end_date', 'number_of_nights', 'guests', 'total_price']
    list_filter = ['created_by', 'property']
    search_fields = ['created_by', 'property']

    @admin.display(ordering="property__title")
    def property_title(self, obj):
        return obj.property.title
