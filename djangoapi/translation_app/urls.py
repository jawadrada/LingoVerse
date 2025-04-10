from django.urls import path
from .views import translate_text, list_common_translations, update_common_translations

urlpatterns = [
    path('translate/', translate_text, name='translate_text'),
    path('translations/', list_common_translations, name='list_translations'),
    path('translations/update/', update_common_translations, name='update_translations')
]