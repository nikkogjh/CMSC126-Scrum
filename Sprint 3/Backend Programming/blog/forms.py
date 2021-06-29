# Based from Django documentation
# https://docs.djangoproject.com/en/3.2/topics/forms/modelforms/

from django.forms import ModelForm
from .models import Feedback

class ContactForm(ModelForm):
	class Meta:
		model = Feedback
		fields = ['name','email','message']