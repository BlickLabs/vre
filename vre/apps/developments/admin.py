#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.contrib import admin

from vre.apps.developments.forms import DevelopForm
from vre.core.utils import export_as_xls
from . import models


@admin.register(models.Develop)
class DevelopsAdmin(admin.ModelAdmin):
    list_display = ('name',)
    form = DevelopForm
    actions = [export_as_xls]
    export_as_xls.short_description = "Export selected objects to XLS"