const chai = require('chai');

const { expect } = chai;

const mapStatusHTTP = require('../../src/utils/mapStatusHTTP');

describe('Testa utils/mapStatusHTTP.js', function () {
  it('Deve mapear o status "SUCCESSFUL" para o código HTTP 200', function () {
    const result = mapStatusHTTP('SUCCESSFUL');
    expect(result).to.equal(200);
  });

  it('Deve mapear o status "CREATED" para o código HTTP 201', function () {
    const result = mapStatusHTTP('CREATED');
    expect(result).to.equal(201);
  });

  it('Deve mapear o status "NOT_FOUND" para o código HTTP 404', function () {
    const result = mapStatusHTTP('NOT_FOUND');
    expect(result).to.equal(404);
  });

  it('Deve mapear o status "CONFLICT" para o código HTTP 409', function () {
    const result = mapStatusHTTP('CONFLICT');
    expect(result).to.equal(409);
  });

  it('Deve mapear o status "INVALID_VALUE" para o código HTTP 422', function () {
    const result = mapStatusHTTP('INVALID_VALUE');
    expect(result).to.equal(422);
  });

  it('Deve mapear um status desconhecido para o código HTTP 500', function () {
    const result = mapStatusHTTP('UNKNOWN_STATUS');
    expect(result).to.equal(500);
  });
});
