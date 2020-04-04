## The Julia Project
Julia is a project founded by [@arieefrachman](https://github.com/arieefrachman) and [@ebenhaezerbm](https://github.com/ebenhaezerbm) to help West Kalimantan government to develop their province.

## Requirements
* Nodejs v12 or later
* Git

## Setup
For development purpose

```bash
git clone https://github.com/arieefrachman/julia-api
cd julia-api
```

```bash
npm install
```
or 
```bash
yarn install
```

To start the server, run the following

```bash
node server.js
```
or if you prefer using `nodemon`
```bash
nodemon server.js
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.

## Configuration file
Create your own config file by creating new `.env` file based on `.env.example`
Here's sample config
```.dotenv
PORT=3000
MONGODB_SRV=<Your mongodb connection string>
``` 
