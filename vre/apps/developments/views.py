#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.views.generic import DetailView, View

from vre.apps.developments.models import Develop
from vre.apps.documents.models import Brochure


class DevelopDetailView(DetailView):
    template_name = 'develops/develop_detail.html'
    model = Develop
    pk_url_kwarg = 'id'
    context_object_name = 'develop'


class DownloadFileView(View):
    def get(self, request, id):
        brochure = Brochure.objects.get(id=id)
        filename = brochure.file.name.split('/')[-1]
        print filename
        response = HttpResponse(
            brochure.file,
            content_type='application/force-download'
        )
        response['Content-Disposition'] = 'attachment; filename=%s' % filename
        return response