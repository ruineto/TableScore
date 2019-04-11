# Build a customer management app using Nest.js, Vue.js and MongoDB

Application repo for a customer list management application built with Nest.js, Vue.js and MongoDB.

## Getting Started
This prototype is divided into two separate sections. Namely the Backend ( Built with Nest.js) and the frontend
( Built with Vue.js ).

## Installing Prerequisites
```bash
sudo apt install nodejs npm mongodb
```

### Clone the repository
To easily set up the application, clone this repository which contains directory for both sections of the project ( i.e `tabela-riscos-backend` and `tabela-riscos-frontend`)

```bash
git clone https://github.com/ruineto/TableScore.git
```
## Backend
### Change directory into the backend
```bash
cd tabela-riscos-backend
```

### Install backend dependencies

```bash
npm install
```

### MongoDB
Ensure that you have mongoDB installed on your machine before running the application. I have this fully setup on my mac already.

Start mongoDB:

```bash
sudo mongod
```

### Run the application
Open another terminal and still within the `tabela-riscos-backend` project directory run the application with:

```bash
npm run start
```

This will start the backend application on port `3000`.

## Frontend
Open another terminal from the `tabela-riscos` and navigate to the `tabela-riscos-frontend` folder to setup the frontend

### Frontend dependencies
```bash
cd tabela-riscos-frontend
npm install
```

### Run the frontend app

```bash
npm run serve
```

### Test the application
Finally open your browser and view the application on http://localhost:8080

## Prerequisites
 [Node.js](https://nodejs.org/en/), [Npm](https://www.npmjs.com/), [MongoDB](https://docs.mongodb.com/v3.2/installation/)

## Built With
[Nest.js](https://nestjs.com/)
[Vue.js](https://vuejs.org/)
[MongoDB]() 
