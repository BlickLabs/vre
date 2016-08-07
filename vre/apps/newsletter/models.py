#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.db import models
from django.utils.translation import ugettext_lazy as _


class Suscriber(models.Model):
    email = models.EmailField(
        _('Email'),
        blank=False,
        null=False,
    )
    name = models.CharField(
        _('Name'),
        max_length=50,
        blank=True,
        null=True
    )
    phone = models.IntegerField(
        _('Phone'),
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = _('Susucriber')
        verbose_name_plural = _('Suscribers')

    def __unicode__(self):
        return self.email