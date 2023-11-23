const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const serviceIndex = require('../../../src/services/index');

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
});
