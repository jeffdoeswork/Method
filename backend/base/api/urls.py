from django.urls import path, include
from . import views
from .views import MyTokenObtainPairView, RegisterApi
from .observation_views import requestObservations

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),
    path('notes/', views.getNotes),
    path('observation/', requestObservations),

    path('register', RegisterApi.as_view()),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('tutorials/', views.tutorial_list),

]
