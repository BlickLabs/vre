#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.db import models
from django.utils.translation import ugettext_lazy as _


class Develop(models.Model):
    name = models.CharField(
        _('Name'),
        max_length=50,
        blank=False,
        null=False,
    )

    class Meta:
        verbose_name = _('Develop')
        verbose_name_plural = _('Develops')

    def __unicode__(self):
        return self.name
