const { StatusCodes } = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
const User = require('../models/User');
const Todos = require('../models/Todos');
// eslint-disable-next-line no-unused-vars
const Tarefa = require('../models/Tarefas');

module.exports = {
  all: async (_, response) => {
    const list = await Todos.findAll();
    response.json({ list });
  },

  ListandoUmaLista: (request, response) => {
    const id = parseInt(request.params.id);
    if (Number.isNaN(id)) return response.status(StatusCodes.BAD_REQUEST).end();
    Todos.findByPk(id).then(() => {
      response.sendStatus(StatusCodes.OK);
    });
  },

  criarLista: async (request, response) => {
    let titulo = request.body.titulo;
    if (titulo != undefined) {
      Todos.create({
        titulo: titulo,
      }).then(() => {
        response.sendStatus(StatusCodes.CREATED);
      });
    } else {
      response.json({ error: 'Dados não enviados' });
    }
  },

  deletarLista: async (request, response) => {
    const id = parseInt(request.params.id);
    if (Number.isNaN(id)) return response.status(StatusCodes.BAD_REQUEST).end();

    Todos.destroy({
      where: { id },
    }).then(() => {
      response.status(StatusCodes.NO_CONTENT).end();
    });
  },

  atualizarTituloLista: async (request, response) => {
    let id = request.params.id;
    let tituloEdit = request.body.titulo;
    Todos.update(
      { titulo: tituloEdit },
      {
        where: {
          id: id,
        },
      },
    ).then(() => {
      response.sendStatus(StatusCodes.OK);
    });
  },
};
