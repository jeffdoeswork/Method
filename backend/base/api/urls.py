from django.urls import path, include, re_path
from . import views
from . import method_views
from .views import MyTokenObtainPairView, RegisterApi

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes),
    path('register', RegisterApi.as_view()),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('observations/', method_views.ObservationList.as_view()), 
    path('observations/<int:pk>/', method_views.ObservationDetail.as_view()), 

    path('datas/<int:pk>', method_views.DataDetail.as_view()),
    path('datas', method_views.DataList.as_view()),

    path('hypothesis/', method_views.HypothesisList.as_view()), 
    path('hypothesis/<int:pk>/', method_views.HypothesisDetail.as_view()), 

    path('experiments/', method_views.ExperimentList.as_view()), 
    path('experiments/<int:pk>/', method_views.ExperimentDetail.as_view()), 

    path('conclusions/', method_views.ConclusionList.as_view()), 
    path('conclusions/<int:pk>/', method_views.ConclusionDetail.as_view()), 

    path('methods/', method_views.method_list), 
    path('method_artifacts/', method_views.method_artifacts_list), 
    path('method/<int:pk>/', method_views.method_detail, name='method_detail'), 
]
