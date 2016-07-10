#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.core.exceptions import PermissionDenied
from django.shortcuts import get_object_or_404
from django.template.response import TemplateResponse
from django.views.generic import View

from vre.apps.develops.models import Develop
from vre.apps.documents.models import Document
from vre.core.mixins import LoginRequiredMixin


class DownloadDocumentView(LoginRequiredMixin, View):
    template_name = 'documents/download_file.html'

    def get(self, request, slug):
        # We validate the develop exist
        develop = get_object_or_404(Develop, slug=slug)
        # If the develop is in the user develops of the user we search the
        # documents, else, raise permission denied
        if develop in request.user.develops.all():
            try:
                documents = Document.objects.filter(develop=develop)
            except Document.DoesNotExist:
                documents = None
            ctx = {
                'documents': documents
            }
            return TemplateResponse(request, self.template_name, ctx)
        else:
            raise PermissionDenied