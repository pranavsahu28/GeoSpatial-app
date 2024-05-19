# Geo-Data App

Geo-Data App is a web application that allows users to register, log in, upload geo-data files (GeoJSON/KML or TIFF), and visualize these files on an interactive map using Mapbox.

## Features

- User registration and login
- File upload (GeoJSON/KML or TIFF)
- Interactive map visualization using Mapbox
- Display list of uploaded files

## Technologies Used

- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Multer
- **Frontend:** Next.js, React, Axios, Mapbox GL JS
- **Database:** MongoDB

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- MongoDB (running locally or a MongoDB Atlas account)
- Mapbox account (for Mapbox access token)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/geo-data-app.git
    cd geo-data-app
    ```

2. **Set up the backend:**

    ```bash
    cd backend
    npm install
    ```

    - Create a `.env` file in the `backend` directory with the following content:

      ```plaintext
      JWT_SECRET=your_jwt_secret
      ```

3. **Set up the frontend:**

    ```bash
    cd ../frontend
    npm install
    ```

    - Create a `.env.local` file in the `frontend` directory with the following content:

      ```plaintext
      NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
      ```

### Running the Application

1. **Start MongoDB:**

    Make sure your MongoDB server is running. If you're using a local MongoDB instance, you can start it with:

    ```bash
    mongod
    ```

2. **Start the backend server:**

    Open a terminal and navigate to the `backend` directory:

    ```bash
    cd backend
    node server.js
    ```

    The backend server should be running on `http://localhost:5000`.

3. **Start the frontend server:**

    Open another terminal and navigate to the `frontend` directory:

    ```bash
    cd frontend
    npm run dev
    ```

    The frontend server should be running on `http://localhost:3000`.

### Usage

1. **Access the Application:**

    Open your web browser and navigate to `http://localhost:3000`.

2. **Register a New User:**

    Click on "Register" in the navigation bar and create a new account.

3. **Login:**

    After registering, log in with your new account.

4. **Upload a File:**

    Navigate to the dashboard and use the file upload form to upload a GeoJSON/KML or TIFF file.

5. **View the Map:**

    The map should display on the dashboard, and you can interact with it using Mapbox controls.

6. **Check Uploaded Files:**

    Uploaded files should be listed on the dashboard.

### Project Structure
geo-data-app/
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── authController.js
│ │ └── fileController.js
│ ├── models/
│ │ ├── User.js
│ │ └── File.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── fileRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── uploads/
│ ├── .gitignore
│ ├── server.js
│ └── package.json
└── frontend/
├── components/
│ ├── FileUpload.js
│ ├── MapComponent.js
│ └── Navbar.js
├── pages/
│ ├── api/
│ ├── index.js
│ ├── login.js
│ ├── register.js
│ └── dashboard.js
├── public/
├── styles/
├── .gitignore
├── package.json
└── next.config.js
