from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import MovieSerializer
from .models import Movie

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
   

