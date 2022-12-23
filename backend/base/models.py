from django.db import models
from django.contrib.auth.models import User

class Tutorial(models.Model):
    OneNight = 'One Night'
    GrandOpening = 'Weekend'
    Invester = 'Invester' 
    STATUS = [
        (OneNight, ('Premium One Night Stay')),
        (GrandOpening, ('Grand Opening Weekend')),
        (Invester, ('Invester & Owner')),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    income = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200, blank=False, default='')
    validated = models.BooleanField(default=False)
    plan = models.CharField(
       max_length=32,
       choices=STATUS,
       default=OneNight,
   )