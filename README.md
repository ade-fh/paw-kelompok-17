# paw-mern-crud

A simple records system using MongoDB, Express.js, React.js, and Node.js with real-time Create, Read, Update, and Delete operations using Socket.io. REST API was implemented on the back-end. Semantic UI React was used for the UI.

![Node Version](https://img.shields.io/badge/node-v12.16.3-yellowgreen.svg)
![NPM Version](https://img.shields.io/badge/npm-v6.14.4-blue.svg)
![MongoDB Version](https://img.shields.io/badge/mongodb-v3.6.12-blue.svg)
![Mongoose Version](https://img.shields.io/badge/mongoose-v5.9.13-blue.svg)
![Language: American English](https://img.shields.io/badge/language-american%20english-red.svg)


Demo: [https://paw-mern-crud.herokuapp.com/](https://paw-mern-crud.herokuapp.com/)

![MERN CRUD Screenshot](screenshot.png)

## Instructions

For the **back-end**, install the dependencies once via the terminal.
```bash
npm install
```

Run the *main server*. It listens on port 3000.
```bash
CORS=1 node server
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
