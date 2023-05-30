from django.contrib.auth.models import User
from rest_framework import serializers


class SignUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = {'username', 'password', 'role_id', 'com_id'}

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            role_id=validated_data['role_id'],
            com_id=validated_data['com_id'],
            password=validated_data['password'],
        )
        user.save()

        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class LogoutSerializer(serializers.Serializer):
    pass
