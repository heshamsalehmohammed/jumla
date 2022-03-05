const initialState = {
  cartState: {
    cartProducts: [
      {productId: 1, stockDetailId: 1, count: 1},
      {productId: 2, stockDetailId: 1, count: 4},
      {productId: 5, stockDetailId: 1, count: 3},
      {productId: 4, stockDetailId: 1, count: 1},
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
      {
        id: 3,
        name: 'p3',
        description: 'p3',
        specifications: [
          {
            name: 'weight',
            value: '23kg',
          },
        ],
        price: 23,
        oldPrice: 50,
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
        id: 4,
        name: 'p4',
        description: 'p4',
        specifications: [
          {
            name: 'weight',
            value: '23kg',
          },
        ],
        price: 23,
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
        id: 5,
        name: 'p5',
        description: 'p5',
        specifications: [
          {
            name: 'weight',
            value: '23kg',
          },
        ],
        price: 23,
        priceCurrency: 'EGP',
        mainImage: 'https://source.unsplash.com/1600x900/?product',
        subImages: [
          'https://source.unsplash.com/1600x900/?product',
          'https://source.unsplash.com/1600x900/?product',
          'https://source.unsplash.com/1600x900/?product',
        ],
        hasSizes: true,
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
          },
          {id: 4, name: 'sub cat 4'},
        ],
      },
      {id: 2, name: 'cat 2'},
      {id: 3, name: 'cat 3'},
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
          {productId: 1, stockDetailId: 1, count: 1}, // to ref to the whole product object not just the id
          {productId: 2, stockDetailId: 1, count: 4},
          {productId: 5, stockDetailId: 1, count: 3},
          {productId: 4, stockDetailId: 1, count: 1},
        ],
        priceDetails: {
          subTotal: 50,
          tax: 0,
          discount: 0,
          total: 50,
          currency: 'EGP',
        },
        shippingDetails: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          city: '',
          district: '',
          floor: '',
          appartment: '',
          address: '',
          specialNotes: '',
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
};

export default initialState;
