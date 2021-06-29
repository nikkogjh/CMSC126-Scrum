from django.contrib import admin
from .models import Feedback

# Register your models here.

# customize the Feedback filter and display
class FeedbackAdmin(admin.ModelAdmin):
	list_display=('name','email','date')
	list_filter=('name','date')
	search_fields = ('name','date')

	class Meta:
		model = Feedback

# to show the Feedback saved into the database 
# and can be accessed via admin
admin.site.register(Feedback, FeedbackAdmin)
