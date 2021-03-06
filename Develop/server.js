//Main server that brings together all routes and associated functions together.
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// imported here is (Express, Sequelize, API routes & PORT )

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Congratulations!!! Your PORT is active here, ` + PORT));
});

