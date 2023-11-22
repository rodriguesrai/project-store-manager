const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { getAllSalesDB, getSalesById1DB } = require('../mocks/sales.mock');
const salesModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.service');

chai.use(sinonChai);
const { expect } = chai;

describe('Testa sales da camada service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deve retornar todas as vendas', async function () {
    sinon.stub(salesModel, 'getAllSales').resolves(getAllSalesDB);

    const result = await salesService.getAllSales();

    expect(result).to.deep.equal({
      status: 'SUCCESSFUL',
      data: getAllSalesDB,
    });
  });

  it('Deve retornar uma venda específica por ID', async function () {
    const saleId = 1;
    sinon.stub(salesModel, 'getSalesById').withArgs(saleId).resolves(getSalesById1DB);

    const result = await salesService.getSalesById(saleId);

    expect(result).to.deep.equal({
      status: 'SUCCESSFUL',
      data: getSalesById1DB,
    });
  });

  it('Deve retornar uma mensagem de erro se a venda não for encontrada', async function () {
    const saleId = 999;
    sinon.stub(salesModel, 'getSalesById').withArgs(saleId).resolves(null);

    const result = await salesService.getSalesById(saleId);

    expect(result).to.deep.equal({
      status: 'NOT_FOUND',
      data: { message: 'Sale not found' },
    });
  });
});
