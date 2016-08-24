#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.contrib import admin

from vre.core.utils import export_as_xls
from . import models


@admin.register(models.Subscriber)
class SuscriberAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'phone', 'source')
    list_filter = ('source',)
    actions = [export_as_xls]
    export_as_xls.short_description = "Export selected objects to XLS"