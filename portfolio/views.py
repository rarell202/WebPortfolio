from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, 'portfolio/index.html')

def submit_form(request):
    return render(request, 'porfolio/submit_form.html')
