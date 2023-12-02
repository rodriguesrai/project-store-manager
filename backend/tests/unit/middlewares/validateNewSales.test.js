const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const validateNewSaleMiddleware = require('../../../src/middlewares/validateNewSales');
const { productsService } = require('../../../src/services');

chai.use(sinonChai);
const { expect } = chai;

describe('Testa validateNewSale Middleware', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deve chamar next se todos os productId existirem', async function () {
    const req = {
      body: [
        { productId: 1, quantity: 5 },
        { productId: 2, quantity: 3 },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(productsService, 'getProductsById').resolves({ status: 'SUCCESSFUL' });

    await validateNewSaleMiddleware.validateProductId(req, res, next);

    expect(next.calledOnce).to.equal(true);
    expect(res.status.called).to.equal(false);
    expect(res.json.called).to.equal(false);
  });

  it('Deve retornar erro 404 se algum productId não existir', async function () {
    const req = {
      body: [
        { productId: 1, quantity: 5 },
        { productId: 2, quantity: 3 },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(productsService, 'getProductsById').resolves({ status: 'NOT_FOUND' });

    await validateNewSaleMiddleware.checkProductExistence(req, res, next);

    expect(res.status).to.have.been.calledOnceWith(404);
    expect(res.json).to.have.been.calledOnceWith({ message: 'Product not found' });
  });

  it('Deve chamar next para validateQuantity', function () {
    const req = {
      body: [
        { productId: 1, quantity: 5 },
        { productId: 2, quantity: 3 },
      ],
    };
    const res = {};
    const next = sinon.stub();

    validateNewSaleMiddleware.validateQuantity(req, res, next);

    expect(next.calledOnce).to.equal(true);
  });
  it('Deve retornar erro 400 se quantity não for informado', function () {
    const req = {
      body: [
        { productId: 1, quantity: 5 },
        { productId: 2 },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    validateNewSaleMiddleware.validateQuantity(req, res, next);

    expect(res.status).to.have.been.calledOnceWith(400);
    expect(res.json).to.have.been.calledOnceWith({ message: '"quantity" is required' });
  });
});
