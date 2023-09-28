# Getting Started

Clone the repo and install all dependencies using `npm install` then start the server using `node server.js` server will run on port 3500

Add your mongoDB url in mongoose.js file to connect to db.

Hosting: [https://backend-for-hospital.onrender.com](https://backend-for-hospital.onrender.com)

### Available user:

sign in to `/api/doctor/login` using:

{
userId:doctor1,
password:password
}

you will get a JWT token in return use that token in auth header for accessing differnet APIs 

# Note that first request made to the server will take upto 15-20 sec to respond as using free server so because to inactivity sever shuts down

## first request will always take upto 15-20 sec to repond

## Available APIs

### Under /doctor route

End Point: `/doctor/register`

Method: POST

Request Body: ```{name:'name',userId:'userId',password:'password',role:'optional'}```

Response: new user details

---

End Point: `/doctor/login`

Method:POST

Resquest Body: ```{userId:'userId',password:'password'}```

Response: JWT Token for session

---

End Point: `/doctor/validate`

Method:GET

Responce: Session Details

---

End Point: `/doctor/forgot-password`

Method:POST

Request Body:```{userId:'userId'}```

Responce: Status of reset password email

---

End Point `/doctor/reset-password`

Method:POST

Request Body: ```{userId:'userId',password:'newPassword'}```

Responce: New password details

###Under /patients route

End Point `/patients/register`

Method:POST

Request Body: ```{phoneNo:'+911234567890'}```

Responce: Patients details

---

End Point `/patients/:id/create_report`

Method:POST

Request Body: ```{patitentId:'+911234567890' , createdBy:"doctor1" , status:"Positive-Admit"}```

Responce: Created report details

---

End Point `/patients/:id/all_reports`

Method:GET

Responce: All reports belonging to the paitent


###Under /reports route

End Point `/reports/:status`

Method:GET

Responce: All reports of the status passed in params

---

### Under /users route

End Point: `/users/register`

Method: POST

Request Body: ```{name:'name',userId:'email',password:'password',role:'optional'}```

Response: new user details

---

End Point: `/users/login`

Method:POST

Resquest Body: ```{userId:'email',password:'password'}```

Response: JWT Token for session

---

End Point: `/users/validate`

Method:GET

Responce: Session Details

---

End Point: `/users/forgot-password`

Method:POST

Request Body:```{userId:'email'}```

Responce: Status of reset password email

---

End Point `/users/reset-password`

Method:POST

Request Body: ```{userId:'email',password:'newPassword'}```

Responce: New password details

