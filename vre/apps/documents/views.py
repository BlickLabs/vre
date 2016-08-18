#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.core.exceptions import PermissionDenied
from django.shortcuts import get_object_or_404
from django.template.response import TemplateResponse
from django.views.generic import View

from vre.apps.developments.models import Develop
from vre.apps.documents.models import Document
from vre.core.mixins import LoginRequiredMixin


class DownloadDocumentListView(LoginRequiredMixin, View):
    def get(self, request):
        # If the develop is in the user developments of the user we search the
        # documents, else, raise permission denied
        developments = request.user.developments.all()
        for develop in developments:
            print develop.document_set.all()
        documents = Document.objects.all()
        ctx = {
            # 'documents': documents,
            'developments': developments
        }
        return TemplateResponse(request, 'documents/download_file.html', ctx)
