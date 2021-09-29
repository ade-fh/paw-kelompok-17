# paw-mern-crud

A simple CRUD applications with MERN stack and Socket.io.

Demo: [https://paw-mern-crud.herokuapp.com/](https://paw-mern-crud.herokuapp.com/)

![MERN CRUD Screenshot](screenshot.png)

## Instructions

For the **back-end**, install the dependencies once via the terminal.
```bash
npm install
```

Run the *main server*. It listens on port 3000.
```bash
npm start
```
View it on the browser.

<br>

If you want to configure the **front-end**, go to *react-src* folder via the terminal.

```bash
cd react-src
```

Install the dependencies required by React once.
```bash
npm install
```

Run the *development server* for React. It listens on port 4200.
```bash
REACT_APP_API_URL=http://localhost:3000 npm start
```

To make a production build, simply run on *react-src* folder via the terminal.
```bash
npm run build
```

## API Testing

For API testing use api branch instead.

CREATE user
```bash
/users
```
Example

![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/POST.PNG)
![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/POST%20Input.PNG)
![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/POST%20Response.PNG)

GET all users
```bash
/users
```
Example

![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/GET.PNG)
![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/GET%20Response.PNG)

GET specific user
```bash
/users/{id}
```
Example

![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/GET%20ID.PNG)
![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/GET%20ID%20Response.PNG)

EDIT specific user
```bash
/users/{id}
```
Example

![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/PUT.PNG)
![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/PUT%20Input.PNG)
![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/PUT%20Response.PNG)

DELETE specific user
```bash
/users/{id}
```
Example

![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/DELETE.PNG)
![](https://github.com/ade-fh/paw-kelompok-17/blob/api/dokumentasi/DELETE%20Response.PNG)
