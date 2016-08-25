#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.contrib import admin
from django.conf import settings

from vre.core.utils import export_as_xls
from . import models


@admin.register(models.Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ('title', 'develop', 'user_type')
    actions = [export_as_xls]
    export_as_xls.short_description = "Export selected objects to XLS"
    list_filter = ('develop', 'user_type')


if settings.DEBUG:
    @admin.register(models.Brochure)
    class BrochureAdmin(admin.ModelAdmin):
        actions = [export_as_xls]
        export_as_xls.short_description = "Export selected objects to XLS"