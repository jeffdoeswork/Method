from django.contrib import admin

# Register your models here.

from .models import Note, Observation, Tutorial
admin.site.register(Note)
admin.site.register(Observation)
admin.site.register(Tutorial)


