#!/usr/bin/env python
# -*- coding: utf-8 -*-


class LoginPermission(object):
    def has_read_permission(self, request, path):
        return request.user.is_authenticated()
