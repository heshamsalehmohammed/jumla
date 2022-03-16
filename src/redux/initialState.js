const initialState = {
  cartState: {
    cartProducts: [
      {productId: 1, stockDetailId: 1, count: 1, profitAmountPerPiece: 10},
      {productId: 2, stockDetailId: 1, count: 4, profitAmountPerPiece: 20},
    ],
    wishlistProducts: [{productId: 5}, {productId: 4}],
  },
  productsState: {
    products: [
      {
        id: 1,
        name: 'p1',
        description: 'p1',
        specifications: [
          {
            name: 'weight',
            value: '23kg',
          },
        ],
        price: 23,
        oldPrice: 50,
        shippingPrice: 10,
        servicePriceRate: 0.1,
        priceCurrency: 'EGP',
        mainImage: 'https://source.unsplash.com/1600x900/?product',
        subImages: [
          'https://source.unsplash.com/1600x900/?product',
          'https://source.unsplash.com/1600x900/?product',
          'https://source.unsplash.com/1600x900/?product',
        ],
        stock: {
          stockDetails: [
            {id: 1, size: 'XL', color: 'red', numAvailableInStock: 6},
            {id: 2, size: 'L', color: 'red', numAvailableInStock: 6},
          ],
          totalNumAvailableInStock: 12,
        },
        createdDate: 4567,
        lastUpdatedDate: 3567,
        createdBy: {
          userId: 4567,
          userName: 'Hesham',
        },
        inventoryStatus: 'outofstock',
        categoryId: 5,
        categoryName: 'product',
        rating: 1,
      },
      {
        id: 2,
        name: 'p2',
        description: 'p2',
        specifications: [
          {
            name: 'weight',
            value: '23kg',
          },
        ],
        price: 23,
        oldPrice: 50,
        shippingPrice: 10,
        servicePriceRate: 0.1,
        priceCurrency: 'EGP',
        mainImage: 'https://source.unsplash.com/1600x900/?product',
        subImages: [
          'https://source.unsplash.com/1600x900/?product',
          'https://source.unsplash.com/1600x900/?product',
          'https://source.unsplash.com/1600x900/?product',
        ],
        stock: {
          stockDetails: [],
          totalNumAvailableInStock: 12,
        },
        createdDate: 4567,
        lastUpdatedDate: 3567,
        createdBy: {
          userId: 4567,
          userName: 'Hesham',
        },
        inventoryStatus: 'outofstock',
        categoryId: 5,
        categoryName: 'product',
        rating: 1,
      },
    ],
    categories: [
      {
        id: 1,
        name: 'cat 1',
        description: 'cat 1',
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
      {id: 2, name: 'cat 2', description: 'cat 2'},
      {id: 3, name: 'cat 3', description: 'cat 3'},
      {
        id: 4,
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
      {id: 5, name: 'cat 5'},
      {id: 6, name: 'cat 6'},
      {
        id: 7,
        name: 'cat 7',
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
      {id: 8, name: 'cat 8'},
      {
        id: 9,
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
  ordersState: {
    orders: [
      {
        id: 1,
        productsDetails: [
          {productId: 1, stockDetailId: 1, count: 1, profitAmountPerPiece: 10}, // to ref to the whole product object not just the id
          {productId: 2, stockDetailId: 1, count: 4, profitAmountPerPiece: 10},
        ],
        priceDetails: {
          subTotal: 50,
          tax: 0,
          discount: 0,
          total: 50,
          currency: 'EGP',
        },
        shippingDetails: {
          firstName: 'hesham',
          lastName: 'saleh',
          email: 'h@h.com',
          phone: '020202',
          city: 'helwan',
          district: 'baharya',
          floor: '1',
          appartment: '1',
          address: 'pla pla pla',
          specialNotes: 'pla pla pla',
        },
        createdDate: 4567,
        lastUpdatedDate: 3567,
        orderedBy: {
          userId: 4567,
          userName: 'Hesham',
          profilePicture: 'https://source.unsplash.com/1600x900/?profile',
        },
        orderStatus: 'pending',
        orderStatusId: 1,
      },
    ],
  },
  lookupState: {
    AccountTypes: [
      {_id: 1, name: 'Merchant'},
      {_id: 2, name: 'Marketer'},
    ],
    Privileges: [
      {_id: 1, name: 'User'},
      {_id: 2, name: 'Admin'},
      {_id: 3, name: 'Owner'},
    ],
    InventoryStatuses: [
      {_id: 1, name: 'In Stock'},
      {_id: 2, name: 'Out Of Stock'},
      {_id: 3, name: 'Low Stock'},
    ],
    PriceCurrencies: [{_id: 'EGP', name: 'EGP'}],
  },
};

export default initialState;
