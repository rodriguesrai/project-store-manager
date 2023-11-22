const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { getAllSalesDB, getSalesById1DB } = require('../mocks/sales.mock');
const salesModel = require('../../../src/models/sales.model');

chai.use(sinonChai);
const { expect } = chai;

describe('Testa /sales na camada model', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa função getAllSales ', async function () {
    sinon.stub(connection, 'execute').resolves([getAllSalesDB]);
    const sales = await salesModel.getAllSales();
    
    expect(sales).to.be.an('array');
    expect(sales).to.be.deep.equal(getAllSalesDB);
  });
  it('Testa função getProductsById válida com ID 1', async function () {
    sinon.stub(connection, 'execute').resolves([getSalesById1DB]);
    const sales = await salesModel.getSalesById(1);
    
    expect(sales).to.be.an('array');
    expect(sales).to.be.deep.equal(getSalesById1DB);
  });
});
