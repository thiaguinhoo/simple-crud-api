/* eslint-disable prettier/prettier */
const supertest = require('supertest');
const { StatusCodes } = require('http-status-codes');

const application = require('../../src/application');
const request = supertest(application);

describe('ROUTES todos', () => {
  it('[GET] /todos return [(UNAUTHORIZED) - 401]', async () => {
    const response = await request.get('/todos');
    expect(response.status).toEqual(StatusCodes.UNAUTHORIZED);
  });
});
