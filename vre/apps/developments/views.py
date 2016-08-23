#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.core.exceptions import PermissionDenied
from django.http import HttpResponse
from django.views.generic import DetailView, View

from vre.apps.developments.models import Develop
from vre.apps.documents.models import Brochure, Document
from vre.core.mixins import LoginRequiredMixin


class DevelopDetailView(DetailView):
    template_name = 'develops/develop_detail.html'
    model = Develop
    pk_url_kwarg = 'id'
    context_object_name = 'develop'


class DownloadFileView(View):
    def get(self, request, id):
        brochure = Brochure.objects.get(id=id)
        filename = brochure.file.name.split('/')[-1]
        response = HttpResponse(
            brochure.file,
            content_type='application/force-download'
        )
        response['Content-Disposition'] = 'attachment; filename=%s' % filename
        return response


class DownloadDocumentView(LoginRequiredMixin, View):
    def get(self, request, id):
        document = Document.objects.get(id=id)
        if request.user.developments.filter(id=document.develop.id).exists():
            ext = document.file.name.split('.')[-1]
            print ext
            filename = '%s.%s' % (document.title, ext)
            response = HttpResponse(
                document.file,
                content_type='application/force-download'
            )
            response['Content-Disposition'] = 'attachment; filename=%s' % filename
            return response
        else:
            raise PermissionDenied