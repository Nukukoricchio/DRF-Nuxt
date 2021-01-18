from django.urls import path

from . import views
from .social import GoogleLogin, FacebookLogin


urlpatterns = [
	path('api/user/register', views.AccountRegister.as_view(), name='register'),
	path('api/user/info', views.AccountInfo.as_view(), name='info'),
	path('api/user/change_password', views.ChangePassword.as_view(), name='change_password'),
	path('api/social/login/google', GoogleLogin.as_view(), name='google_login'),
	path('api/social/login/facebook', FacebookLogin.as_view(), name='facebook_login'),
]