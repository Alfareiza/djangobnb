from django.contrib import admin

from useraccount.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'name', 'is_active', 'is_staff', 'last_login']
    list_filter = ['last_login', 'is_active']
    search_fields = ['email', 'name']
