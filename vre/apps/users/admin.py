#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from vre.apps.users.forms import UserChangeForm, UserCreationForm
from vre.apps.users.models import CoolUser
from vre.core.utils import export_as_xls


@admin.register(CoolUser)
class UserAdmin(BaseUserAdmin):
    # The forms.py to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('email', 'first_name', 'last_name', 'user_type',
                    'is_active')
    list_filter = ('user_type',)
    fieldsets = (
        (None, {
            'fields': ('email', 'password', 'user_type')
        }),
        ('Personal info', {
            'fields': ('first_name', 'last_name')
        }),
        ('Permissions', {
            'fields': ('is_superuser', 'is_active')
        }),
        ('Develops', {
            'fields': ('developments',)
        }),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'user_type',
                       'password1', 'password2', 'developments')}),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()
    actions = [export_as_xls]
    export_as_xls.short_description = "Export selected objects to XLS"

admin.site.unregister(Group)