#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.db import models
from django.utils.translation import ugettext_lazy as _


class Subscriber(models.Model):
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
    phone = models.CharField(
        _('Phone'),
        max_length=50,
        blank=True,
        null=True
    )
    source = models.CharField(
        _('Source'),
        max_length=50,
        blank=False,
        null=False,

    )

    class Meta:
        verbose_name = _('Subscriber')
        verbose_name_plural = _('Subscribers')

    def __unicode__(self):
        return self.email