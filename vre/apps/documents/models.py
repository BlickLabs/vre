#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.db import models
from django.utils.translation import ugettext_lazy as _

from vre.apps.develops.models import Develop


class Document(models.Model):
    title = models.CharField(
        _('Title'),
        max_length=50,
        blank=False,
        null=False,
    )
    file = models.FileField(
        _('File'),
        blank=False,
        null=False,
        upload_to='reports'
    )
    develop = models.ForeignKey(
        Develop,
        verbose_name=_('Develop')
    )

    class Meta:
        verbose_name = _('Document')
        verbose_name_plural = _('Documents')
