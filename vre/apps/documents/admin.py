#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.contrib import admin

from . import models


@admin.register(models.Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ('title',)


@admin.register(models.Brochure)
class BrochureAdmin(admin.ModelAdmin):
    pass