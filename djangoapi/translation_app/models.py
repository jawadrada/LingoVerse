from django.db import models

class CommonTranslation(models.Model):
    text = models.CharField(max_length=255, unique=True)
    translated_text = models.CharField(max_length=255)
    count = models.PositiveIntegerField(default=1)
