from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth import get_user_model

from .serializers import UserSerializer, ChangePasswordSerializer


User = get_user_model()


class AccountRegister(APIView):
	def post(self, request):
		serializer = UserSerializer(data=request.data)
		if serializer.is_valid():
			#Create new user
			serializer.save()
			message = {
			    'message': 'Register successful!'
			}
			return Response(message, status=status.HTTP_201_CREATED)
			
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AccountInfo(APIView):
	permission_classes = (IsAuthenticated, )

	def get(self, request):
		user = request.user
		content = {
		   'user': user.email
		}
		return Response(content)


class ChangePassword(APIView):
	permission_classes = (IsAuthenticated, )

	def put(self, request):
		user = request.user
		serializer = ChangePasswordSerializer(data=request.data)
		if serializer.is_valid():
			# Check old password
			if not user.check_password(serializer.data['old_password']):
				message = {
				    'old_password': 'Your old password is incorrect!'
				}
				return Response(message, status=status.HTTP_400_BAD_REQUEST)

			# Update new password
			user.set_password(serializer.data['new_password'])
			user.save()
			message = {
			    'message': 'Change password successfully!'
			}
			return Response(message, status=status.HTTP_200_OK)
		
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)