#!/usr/bin/env python
# -*- coding: utf-8 -*

import os
import uuid

from django.db import models
from django.utils.translation import ugettext_lazy as _
from private_media.storages import PrivateMediaStorage

from vre.apps.develops.models import Develop


def get_file_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join('reportes', filename)


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
        upload_to=get_file_path,
        storage=PrivateMediaStorage()
    )
    develop = models.ForeignKey(
        Develop,
        verbose_name=_('Develop')
    )

    class Meta:
        verbose_name = _('Document')
        verbose_name_plural = _('Documents')

    def __unicode__(self):
        return self.title
