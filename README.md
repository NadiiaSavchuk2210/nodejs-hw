# 04-auth

Express API with authentication (register, login, logout, refresh), secure cookies, sessions, and private notes.

## Live

**Render:** (https://zero4-auth-feyd.onrender.com)

## Auth API

- POST /auth/register
- POST /auth/login
- POST /auth/refresh
- POST /auth/logout

## Notes API (auth required)

- GET /notes
- GET /notes/:noteId
- POST /notes
- PATCH /notes/:noteId
- DELETE /notes/:noteId
