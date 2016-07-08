#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.contrib import admin

from . import models


@admin.register(models.Develop)
class DevelopsAdmin(admin.ModelAdmin):
    list_display = ('name',)
