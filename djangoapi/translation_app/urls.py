from django.urls import path
from .views import test_openai, translate_text

urlpatterns = [
    path('test-openai/', test_openai, name='test_openai'),
    path('translate/', translate_text, name='translate_text'),
]