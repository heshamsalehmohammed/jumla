const initialState = {
  cartState: {
    orderedProducts: [
      {productId: 1, count: 1},
      {productId: 2, count: 4},
      {productId: 5, count: 3},
      {productId: 4, count: 1},
    ],
  },
  productsState: {
    products: [
      {
        id: 1,
        name: 'product 1',
        description: 'desc 1',
        price: 25,
      },
      {
        id: 2,
        name: 'product 2',
        description: 'desc 2',
        price: 253,
      },
      {
        id: 3,
        name: 'product 3',
        description: 'desc 3',
        price: 2435,
      },
      {
        id: 4,
        name: 'product 4',
        description: 'desc 4',
        price: 245,
      },
      {
        id: 5,
        name: 'product 5',
        description: 'desc 5',
        price: 215,
      },
    ],
    categories: [
      {
        id: 1,
        name: 'cat 1',
        subCategories: [
          {id: 1, name: 'sub cat 1'},
          {id: 2, name: 'sub cat 2'},
          {
            id: 3,
            name: 'sub cat 3',
            subCategories: [
              {id: 1, name: 'sub cat 1'},
              {id: 2, name: 'sub cat 2'},
              {id: 3, name: 'sub cat 3'},
              {id: 4, name: 'sub cat 4'},
            ],
          },
          {id: 4, name: 'sub cat 4'},
        ],
      },
      {id: 1, name: 'cat 2'},
      {id: 1, name: 'cat 3'},
      {
        id: 1,
        name: 'cat 4',
        subCategories: [
          {id: 1, name: 'sub cat 1'},
          {id: 2, name: 'sub cat 2'},
          {
            id: 3,
            name: 'sub cat 3',
          },
          {id: 4, name: 'sub cat 4'},
        ],
      },
      {id: 1, name: 'cat 5'},
      {id: 1, name: 'cat 6'},
      {
        id: 1,
        name: 'cat 7',
        subCategories: [
          {id: 1, name: 'sub cat 1'},
          {id: 2, name: 'sub cat 2'},
          {
            id: 3,
            name: 'sub cat 3',
            subCategories: [
              {id: 1, name: 'sub cat 1'},
              {
                id: 2,
                name: 'sub cat 2',
                subCategories: [
                  {id: 1, name: 'sub cat 1'},
                  {id: 2, name: 'sub cat 2'},
                  {id: 3, name: 'sub cat 3'},
                  {id: 4, name: 'sub cat 4'},
                ],
              },
              {id: 3, name: 'sub cat 3'},
              {id: 4, name: 'sub cat 4'},
            ],
          },
          {id: 4, name: 'sub cat 4'},
        ],
      },
      {id: 1, name: 'cat 8'},
      {
        id: 1,
        name: 'cat 9',
        subCategories: [
          {id: 1, name: 'sub cat 1'},
          {id: 2, name: 'sub cat 2'},
          {id: 3, name: 'sub cat 3'},
          {id: 4, name: 'sub cat 4'},
        ],
      },
    ],
  },
};

export default initialState;
