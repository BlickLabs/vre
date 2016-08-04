#!/usr/bin/env python
# -*- coding: utf-8 -*-

class MailChimpConfig:
    def __init__(self):
        self.apikey = '77e633e92ab0e0cd40cb2599d53efcfe-us1'
        self.shard = 'us1'
        self.api_root = "https://" + self.shard + ".api.mailchimp.com/3.0/"