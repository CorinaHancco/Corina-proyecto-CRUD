from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from .serializers import MovieMiniSerializer, MovieSerializer
from .models import Movie

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    def list(self,request,*args,**kwargs):
        movies = Movie.objects.all()
        serializer = MovieMiniSerializer(movies,many=True)
        return Response(serializer.data)
   

