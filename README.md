# 12-fsd-flask 

A simple **Flask login and registration system** with a minimal retro-red terminal UI.

---

## Features

* User registration with **email** and **password**
* Password stored securely using **hashing (Werkzeug)**
* Login with **session-based authentication**
* Protected **dashboard** only accessible when logged in
* Logout functionality to clear sessions
* Minimal frontend with **retro red terminal theme**

---

## Project Structure

```
12-fsd-flask/
│
├── app.py
├── requirements.txt
├── README.md
├── templates/
│   ├── base.html
│   ├── register.html
│   ├── login.html
│   └── dashboard.html
└── static/
    └── style.css
```

---

## How to run (Linux)

1. Navigate to the project folder:

```bash
cd 12-fsd-flask
```

2. Create a virtual environment and activate:

```bash
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run the app:

```bash
python3 app.py
```

5. Open in browser:

```
http://127.0.0.1:5000/login
```

---

## GET vs POST

* **GET** is used to fetch pages.
* **POST** is used to send sensitive data like login credentials because it does **not expose them in the URL**.

---

## Why client-side validation is not enough

* Client-side validation can be **bypassed by a user**.
* **Server-side validation** in Flask ensures that invalid or malicious data is rejected.

---

## Password hashing

* Passwords are never stored in plaintext.
* Werkzeug's `generate_password_hash()` is used to hash passwords.
* `check_password_hash()` is used for login verification.
* This prevents exposure of real passwords if the database is compromised.

---

## Sessions

* A **session** stores the logged-in user's email.
* Protected routes like `/dashboard` verify if the session exists.
* **Logout** clears the session to terminate access.

---

## Notes

* SQLite is used via SQLAlchemy for simplicity.
* Email is **unique** for each user.
* Passwords must be **≥ 8 characters** and match confirmation.
* Frontend is minimal but functional, with a **retro red terminal style**.
