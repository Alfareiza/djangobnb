from django.contrib import admin

from .models import Property


@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ['title', 'price_per_night', 'bedrooms', 'guests', 'category', 'country']
    list_filter = ['country', 'category', 'host']
    search_fields = ['title', 'category', 'country']
