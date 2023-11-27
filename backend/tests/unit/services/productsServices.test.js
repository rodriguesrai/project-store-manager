const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const serviceIndex = require('../../../src/services/index');
const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');
const { getAllProductsDB } = require('../mocks/product.mock');

chai.use(sinonChai);
const { expect } = chai;

describe('Testa products da camada service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa services/index.js', async function () {
    const productsServiceIndex = await serviceIndex.productsService;
    expect(productsServiceIndex).to.be.a('object');
  });
  it('Deve retornar todos os produtos com status SUCCESSFUL', async function () {
    sinon.stub(productsModel, 'getAllProducts').resolves(getAllProductsDB);
    const result = await productsService.getAllProducts();
    
    expect(result).to.be.an('object');
    expect(result.status).to.be.equal('SUCCESSFUL');
    expect(result.data).to.deep.equal(getAllProductsDB);
  });
});
