# Student Team Members Management Application

SRM Institute of Science & Technology  
**Course:** 21CSS301T – FULL STACK DEVELOPMENT  
**Academic Year:** 2024-25 (Even)  

---

## 📖 Project Description

A full-stack **MERN** application to manage student team members.  
Features include adding new members with profile images, viewing all members, and viewing individual member details.  
The app uses **React.js** for the frontend, **Node.js/Express** for the backend, **MongoDB** for data storage, and **Multer** for image upload.

---

## ✨ Features

- **Home Page**
  - Welcome message and team name.
  - Navigation buttons to add a member or view members.

- **Add Member**
  - Form to input member details (name, role, email).
  - Upload profile image.
  - Data stored in **MongoDB**, image saved in `uploads/` folder.

- **View Members**
  - List all team members in a card layout.
  - Display name, role, and profile image.
  - "View Details" button for each member.

- **Member Details**
  - View full information for a selected member.

- **Consistent Styling**
  - Clean, modern, and responsive design.

---

## 🛠️ Technologies & Software Used

- **Frontend:** React.js, React Router, CSS
- **Backend:** Node.js, Express.js, Multer
- **Database:** MongoDB (with Mongoose)
- **Development Tools:** Visual Studio Code, MongoDB Compass, Git

---

## 📁 Project Structure

```
student-team-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   └── src/
│       ├── pages/
│       ├── App.js
│       ├── index.js
│       └── styles.css
├── README.md
```

---

## 📦 Installation

### Prerequisites

- Node.js
- MongoDB Community Server
- Git

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ThePuniher30/Team-Member-Management.git
   cd student-team-app
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables:**
   - In the `backend` folder, create a `.env` file:
     ```
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/student_team_db
     ```

5. **Start MongoDB:**
   ```bash
   mongod
   ```

6. **Run the backend server:**
   ```bash
   cd backend
   npm run dev
   ```

7. **Run the frontend app:**
   ```bash
   cd frontend
   npm start
   ```

8. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Endpoints

| Method | Endpoint               | Description                         |
|--------|------------------------|-------------------------------------|
| POST   | `/api/members`         | Add a new member (with image)       |
| GET    | `/api/members`         | Get all members                     |
| GET    | `/api/members/:id`     | Get details of a specific member    |

- Images are stored in `backend/uploads/` and served at:  
  `/uploads/<filename>`

---

## 📖 Usage

1. **Home Page**
   - See team name and navigation buttons.

2. **Add Member**
   - Fill out the form and upload a profile image.

3. **View Members**
   - See all members displayed as cards with images.

4. **Member Details**
   - Click "View Details" on any member card to see full information.

---

## 📬 Submission Instructions

- Push all files to a **public GitHub repository** named after your team.
- Ensure all files and folders are properly structured.
- Include a clear `README.md` with:
  - Project description
  - Installation steps
  - API endpoints
  - How to run the app
- Submit your GitHub repository link through the Google Form before the deadline.

---

## 📜 License

This project is for educational purposes as part of the **Full Stack Development** course at **SRM Institute of Science & Technology**.

---

- **Team Name:** MAAS
- **Course:** 21CSS301T – FULL STACK DEVELOPMENT  
- **Academic Year:** 2024-25 (Even)  
