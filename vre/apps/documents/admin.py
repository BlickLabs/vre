#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.contrib import admin

from vre.core.utils import export_as_xls
from . import models


@admin.register(models.Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ('title',)
    actions = [export_as_xls]
    export_as_xls.short_description = "Export selected objects to XLS"


@admin.register(models.Brochure)
class BrochureAdmin(admin.ModelAdmin):
    actions = [export_as_xls]
    export_as_xls.short_description = "Export selected objects to XLS"