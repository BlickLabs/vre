#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.contrib import admin
from django.conf import settings

from vre.apps.developments.forms import DevelopForm
from vre.core.utils import export_as_xls
from . import models

if settings.DEBUG:
    @admin.register(models.Develop)
    class DevelopsAdmin(admin.ModelAdmin):
        list_display = ('id', 'name',)
        form = DevelopForm
        actions = [export_as_xls]
        export_as_xls.short_description = "Export selected objects to XLS"