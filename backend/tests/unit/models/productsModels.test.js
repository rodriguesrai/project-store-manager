const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { getAllProductsDB, getProductsByIdDB } = require('../mocks/product.mock');
const productsModel = require('../../../src/models/products.model');
const modelsIndex = require('../../../src/models/index');

chai.use(sinonChai);
const { expect } = chai;

describe('Testa products da camada model', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa função getAllProducts ', async function () {
    sinon.stub(connection, 'execute').resolves(getAllProductsDB);
    const result = await productsModel.getAllProducts();
    expect(result).to.deep.equal(getAllProductsDB[0]);
  });
  it('Testa função getProductsById válida', async function () {
    sinon.stub(connection, 'execute').resolves([getProductsByIdDB]);
    const result = await productsModel.getProductsById(2);
    expect(result).to.deep.equal(getProductsByIdDB[0]);
  });
  it('Testa models/index.js', async function () {
    const productsModelIndex = await modelsIndex.productsModel;
    expect(productsModelIndex).to.be.a('object');
  });
  it('Testa função createProduct válida', async function () {
    sinon.stub(connection, 'execute').resolves([
      {
        insertId: 1,
      },
    ]);
    const result = await productsModel.createProduct('Produto Teste');
    expect(result).to.deep.equal({ id: 1, name: 'Produto Teste' });
  });
});
