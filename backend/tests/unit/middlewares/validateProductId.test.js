const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { checkProductExistenceId } = require('../../../src/middlewares/validateProductId');
const { productsService } = require('../../../src/services');
const httpErrorMap = require('../../../src/utils/mapStatusHTTP');

chai.use(sinonChai);
const { expect } = chai;

describe('Testa checkProductExistenceId Middleware', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deve retornar erro 404 se o produto não existir', async function () {
    const req = {
      params: { id: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(productsService, 'getProductsById').resolves({ status: 'NOT_FOUND' });

    await checkProductExistenceId(req, res, next);

    expect(res.status).to.have.been.calledOnceWith(httpErrorMap('NOT_FOUND'));
    expect(res.json).to.have.been.calledOnceWith({ message: 'Product not found' });
  });
});
