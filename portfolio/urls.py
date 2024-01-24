# portfolio/urls.py

from django.urls import path
from . import views

app_name = 'portfolio'  # Add this line to define the app namespace

urlpatterns = [
    path('', views.index, name='index'),
    # Add more URL patterns as needed
]
