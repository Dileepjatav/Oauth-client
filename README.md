# OAuth-Client 🔐 (React + Google OAuth + JWT)

This is a React-based frontend application that demonstrates **Google OAuth 2.0 authentication** with **JWT-based login flow**. The app allows users to securely log in using their Google accounts, receive a JWT token from the backend, and access protected resources.

---

## 🌐 Features

- 🔐 Google OAuth2 Login using `@react-oauth/google`
- 🧾 JWT token-based authentication
- 💡 Built for integration with any Node.js/Express backend

---

## 🛠️ Tech Stack

- **React** (with Vite or CRA)
- **@react-oauth/google**
- **JWT (via backend API)**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/oauth-client.git
cd oauth-client
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create a .env File
Create a .env file in the root of the React project:

env
Copy
Edit
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_BACKEND_API=http://localhost:5000  # or your actual backend URL
🔑 How to Get Google Client ID
Go to Google Cloud Console

Create a new project or use an existing one.

Enable OAuth 2.0 Client IDs from APIs & Services > Credentials

Set:

Authorized JavaScript origins: http://localhost:3000

Authorized redirect URIs: leave empty (handled client-side)

Copy the Client ID and paste it into your .env

🧠 Usage
📥 On Successful Login:
js
Copy
Edit
onSuccess={async (credentialResponse) => {
  const result = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/auth/google`, {
    token: credentialResponse.credential,
  });
  // Use result.data.token if returned from backend
}}
📁 Folder Structure
java
Copy
Edit
oauth-client/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
├── .env
├── package.json
└── README.md
🛡️ Security Notes
Use HttpOnly cookies to store JWTs to prevent XSS attacks.

Consider using CSRF protection if storing tokens in cookies.

In production, always use https:// for secure token exchange.

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📄 License
MIT License. Feel free to use, share, and improve.

📬 Contact
Author: Dileep jatav
https://dileepjatav.com

Email: Dileepkhurana73@gmail.com
