const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const todosRoutes = require('./src/routes/todos.routes');
const connection = require('./src/database/database');
const app = express();

connection
  .authenticate()
  .then(() => {
    app.listen(8080, () => {
      console.log('Application rodando!');
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(cors());
process.env.NODE_ENV === 'development' && app.use(require('morgan')('tiny'));

app.use('/todos', todosRoutes);
