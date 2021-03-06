#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.utils.translation import ugettext_lazy as _

from vre.apps.users.models import CoolUser

class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(
        label=_('Password'), widget=forms.PasswordInput
    )
    password2 = forms.CharField(
        label=_('Password confirmation'), widget=forms.PasswordInput
    )

    class Meta:
        mdodel = CoolUser
        fields = ('email', 'first_name', 'last_name', 'user_type', 'developments')

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super(UserCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField(
        label=("Password"),
        help_text=_(
            "Raw passwords are not stored, so there is no way to see "
            "this user's password, but you can change the password "
            "using <a href=\'../password/\'>this form</a>.")
    )
    class Meta:
        model = CoolUser
        fields = ('email', 'first_name', 'last_name', 'user_type', 'developments')