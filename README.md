# Student Hub

Production-ready full-stack SaaS platform for student communities, resources, doubt solving, study groups, coding contests, placement preparation, realtime chat, notifications, and administration.

## Architecture
- `src/`: React/Vite SaaS frontend with protected routes, dashboard, listings, docs, and responsive Tailwind UI.
- `backend/src/config`: environment and MongoDB connection.
- `backend/src/models`: Mongoose schemas with indexes, timestamps, references, and soft delete fields.
- `backend/src/controllers`: HTTP orchestration for auth and resources.
- `backend/src/services` and `backend/src/repositories`: extension points for business logic and data access.
- `backend/src/middleware`: auth, RBAC, errors, security middleware.
- `backend/src/routes`: versioned REST API mounted under `/api/v1`.
- `backend/src/sockets`: Socket.io realtime chat/notification gateway.
- `docs`: SRS and ERD.
- `.github/workflows`: CI pipeline.

## API
Core endpoints include `/api/v1/auth/register`, `/api/v1/auth/login`, `/api/v1/auth/me`, `/api/v1/communities`, `/api/v1/resources`, `/api/v1/posts`, `/api/v1/study-groups`, `/api/v1/contests`, and `/api/v1/admin/audit`.

## Deployment
Deploy frontend to Vercel using `npm run build`. Deploy backend to Render/Railway with `backend/` as root and `npm start`. Use MongoDB Atlas, Redis, Cloudinary, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, and `CLIENT_ORIGIN` environment variables.
