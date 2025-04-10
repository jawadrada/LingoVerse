from rest_framework import serializers
from .models import CommonTranslation

class CommonTranslationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommonTranslation
        fields = ['id', 'text', 'translated_text', 'count']

