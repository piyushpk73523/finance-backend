
# Finance Backend (MERN)

## Features
- JWT Authentication
- Role-based Access Control (Viewer, Analyst, Admin)
- Financial Records CRUD
- Dashboard Analytics (income, expense, balance)
- Pagination & Filtering

## Setup
```bash
npm install
npm run dev
```

## API
### Auth
POST /api/auth/register  
POST /api/auth/login  

### Records
GET /api/records  
POST /api/records (Admin)  

### Dashboard
GET /api/dashboard/summary  

## Notes
- Use Authorization: Bearer <token>
- MongoDB required
