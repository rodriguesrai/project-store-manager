const getAllProductsService = {
  status: 'SUCCESSFUL',
  data: [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do Capitão América',
    },
  ],
};

const getAllProductsDB = [
  [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do Capitão América',
    },
  ],
];

const getProductsByIdDB = [
  [
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
  ],
];

module.exports = {
  getAllProductsDB,
  getProductsByIdDB,
  getAllProductsService,
};