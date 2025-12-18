# 05-mail-and-img

Express API with authentication, **password reset via email**, and **user avatar upload**.

## Live

**Render:** https://zero5-mail-and-img-xlvt.onrender.com

## Auth API

- POST /auth/register
- POST /auth/login
- POST /auth/refresh
- POST /auth/logout
- POST /auth/request-reset-email
- POST /auth/reset-password

## Users API (auth required)

- PATCH /users/me/avatar

## Notes API (auth required)

- GET /notes
- GET /notes/:noteId
- POST /notes
- PATCH /notes/:noteId
- DELETE /notes/:noteId
