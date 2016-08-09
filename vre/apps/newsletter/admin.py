#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.contrib import admin

from . import models


@admin.register(models.Subscriber)
class SuscriberAdmin(admin.ModelAdmin):
    pass