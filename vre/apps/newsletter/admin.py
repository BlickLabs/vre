#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.contrib import admin

from . import models


@admin.register(models.Suscriber)
class SuscriberAdmin(admin.ModelAdmin):
    pass