import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './AddProductAccordionForm.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Joi from 'joi-browser';
import Form from '../../../../common/form';
import {withTranslation} from 'react-i18next';
import {withRouter} from 'react-router-dom';
import {Accordion, AccordionTab} from 'primereact/accordion';
import Button from 'react-bootstrap/Button';
import {v4 as uuidv4} from 'uuid';
import {removeNegativeValue, getCategoriesOptions} from '../../../../common';

class AddProductAccordionForm extends Form {
  constructor(props) {
    super(props);
    this.updateSpecNameHandler = this.updateSpecNameHandler.bind(this);
    this.updateSpecValueHandler = this.updateSpecValueHandler.bind(this);
    this.updateStockDetailSizeHandler =
      this.updateStockDetailSizeHandler.bind(this);
    this.updateStockDetailNumStockHandler =
      this.updateStockDetailNumStockHandler.bind(this);
    this.updateTotalNumAvailableInStockHandler =
      this.updateTotalNumAvailableInStockHandler.bind(this);
  }

  state = {
    data: {
      name: '',
      description: '',
      specifications: [],
      price: 0,
      priceCurrency: 'EGP',
      mainImage: [],
      subImages: [],
      stock: {
        stockDetails: [],
        totalNumAvailableInStock: 0,
      },
      inventoryStatus: '',
      categoryId: 0,
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label('Product Name'),
    description: Joi.string().required().label('Product Description'),
    specifications: Joi.array().items(
      Joi.object().keys({
        name: Joi.string().required(),
        value: Joi.string().required(),
      })
    ),
    price: Joi.number().greater(0).required().label('Product Price'),
    priceCurrency: Joi.string().required().label('Product Price Currency'),
    mainImage: Joi.array().length(1).required(),
    subImages: Joi.array(),
    hasSizes: Joi.boolean().required(),
    stock: Joi.object().keys({
      stockDetails: Joi.array().items(
        Joi.object().keys({
          size: Joi.string().required().label('Product size'),
          color: Joi.string().required().label('Product color'),
          numAvailableInStock: Joi.number().greater(0).required(),
        })
      ),
      totalNumAvailableInStock: Joi.number()
        .required()
        .greater(0)
        .label('Available In Stock'),
    }),
    'stock.totalNumAvailableInStock': Joi.number()
      .required()
      .greater(0)
      .label('Available In Stock'),
    inventoryStatus: Joi.string().required().label('Product Inventory Status'),
    categoryId: Joi.number().required().label('Product Category'),
  };

  componentDidMount() {
    let imgFiles = [];
    const url =
      'https://cdn.shopify.com/s/files/1/0234/8017/2591/products/young-man-in-bright-fashion_925x_f7029e2b-80f0-4a40-a87b-834b9a283c39.jpg?v=1572867553';
    const fileName = 'myFile.jpg';
    const _this = this;
    fetch(url).then(async (response) => {
      const contentType = response.headers.get('content-type');
      const blob = await response.blob();
      imgFiles.push({
        file: new File([blob], fileName, {type: contentType}),
        id: 1,
        valid: true,
        errors: [],
      });
      _this.setState({
        ..._this.state,
        data: {
          ..._this.state.data,
          mainImage: imgFiles,
        },
      });
    });
  }

  addNewSpecHandler = () => {
    const uniqueId = uuidv4();
    this.schema = {
      ...this.schema,
      [`specifications.name_$$$_${uniqueId}`]: Joi.string()
        .required()
        .label('Name'),
      [`specifications.value_$$$_${uniqueId}`]: Joi.string()
        .required()
        .label('Value'),
    };
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        specifications: [
          ...this.state.data.specifications,
          {id: uniqueId, name: '', value: ''},
        ],
      },
    });
  };

  removeSpecHandler = (uniqueId) => {
    const newSchema = {
      ...this.schema,
    };

    delete newSchema[`specifications.name_$$$_${uniqueId}`];
    delete newSchema[`specifications.value_$$$_${uniqueId}`];

    this.schema = newSchema;

    const newSpecifications = [...this.state.data.specifications].filter(
      (spec) => spec.id !== uniqueId
    );

    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        specifications: newSpecifications,
      },
    });
  };

  addNewStockDetailHandler = () => {
    const uniqueId = uuidv4();
    this.schema = {
      ...this.schema,
      [`stock.stockDetails.size_$$$_${uniqueId}`]: Joi.string()
        .required()
        .label('size'),
      [`stock.stockDetails.color_$$$_${uniqueId}`]: Joi.string()
        .required()
        .label('color'),
      [`stock.stockDetails.numAvailableInStock_$$$_${uniqueId}`]: Joi.number()
        .greater(0)
        .required()
        .label('Number Available'),
    };
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        stock: {
          ...this.state.data.stock,
          stockDetails: [
            ...this.state.data.stock.stockDetails,
            {id: uniqueId, size: '', color: '', numAvailableInStock: 0},
          ],
        },
      },
    });
  };

  removeStockDetailHandler = (uniqueId) => {
    const newSchema = {
      ...this.schema,
    };

    delete newSchema[`stock.stockDetails.size_$$$_${uniqueId}`];
    delete newSchema[`stock.stockDetails.color_$$$_${uniqueId}`];
    delete newSchema[`stock.stockDetails.numAvailableInStock_$$$_${uniqueId}`];

    this.schema = newSchema;

    const newStockDetails = [...this.state.data.stock.stockDetails].filter(
      (spec) => spec.id !== uniqueId
    );

    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        stock: {
          ...this.state.data.stock,
          stockDetails: newStockDetails.map((sd) => ({...sd})),
        },
      },
    });
  };

  getIdFromName = (name) => {
    return name.split('_$$$_')[1];
  };

  updateSpecNameHandler = (name, newValue, errors) => {
    this.setState({
      errors: errors,
      data: {
        ...this.state.data,
        specifications: [
          ...this.state.data.specifications.map((_spec) => {
            return {
              ..._spec,
              name:
                _spec.id === this.getIdFromName(name) ? newValue : _spec.name,
            };
          }),
        ],
      },
    });
  };
  updateSpecValueHandler = (name, newValue, errors) => {
    this.setState({
      errors: errors,
      data: {
        ...this.state.data,
        specifications: [
          ...this.state.data.specifications.map((_spec) => {
            return {
              ..._spec,
              value:
                _spec.id === this.getIdFromName(name) ? newValue : _spec.value,
            };
          }),
        ],
      },
    });
  };
  updateStockDetailSizeHandler = (name, newValue, errors) => {
    this.setState({
      errors: errors,
      data: {
        ...this.state.data,
        stock: {
          ...this.state.data.stock,
          stockDetails: [
            ...this.state.data.stock.stockDetails.map((stockDetail) => {
              return {
                ...stockDetail,
                size:
                  stockDetail.id === this.getIdFromName(name)
                    ? newValue
                    : stockDetail.size,
              };
            }),
          ],
        },
      },
    });
  };

  updateTotalNumAvailableInStockHandler = (name, newValue, errors) => {
    this.setState({
      errors: errors,
      data: {
        ...this.state.data,
        stock: {
          ...this.state.data.stock,
          totalNumAvailableInStock: newValue,
        },
      },
    });
  };

  updateStockDetailColorHandler = (name, newValue, errors) => {
    this.setState({
      errors: errors,
      data: {
        ...this.state.data,
        stock: {
          ...this.state.data.stock,
          stockDetails: [
            ...this.state.data.stock.stockDetails.map((stockDetail) => {
              return {
                ...stockDetail,
                color:
                  stockDetail.id === this.getIdFromName(name)
                    ? newValue
                    : stockDetail.color,
              };
            }),
          ],
        },
      },
    });
  };

  updateStockDetailNumStockHandler = (name, newValue, errors) => {
    let totalNumberInStock = 0;
    let newStockDetails = [
      ...this.state.data.stock.stockDetails.map((stockDetail) => {
        const numInStock =
          stockDetail.id === this.getIdFromName(name)
            ? Number(newValue)
            : stockDetail.numAvailableInStock;
        totalNumberInStock += numInStock;
        return {
          ...stockDetail,
          numAvailableInStock: numInStock,
        };
      }),
    ];
    this.setState({
      errors: errors,
      data: {
        ...this.state.data,
        stock: {
          totalNumAvailableInStock: totalNumberInStock,
          stockDetails: newStockDetails,
        },
      },
    });
  };

  doSubmit = async () => {
    try {
      debugger;

      this.props.history.replace('/dashboard');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = {...this.state.errors};
        errors.email = ex.response.data;
        this.setState({errors});
      }
    }
  };
  render() {
    const {t, i18n} = this.props;
    return (
      <form className="" onSubmit={this.handleSubmit}>
        <Accordion multiple activeIndex={[0]}>
          <AccordionTab header="Product Images">
            <div className="row form-row justify-content-center justify-content-sm-start">
              {this.renderFilesUpload(
                'mainImage',
                'Main Image',
                'form-group',
                'form-label',
                true,
                {minWidth: '240px', minHeight: '150px'},
                'Drop your main image here',
                1,
                2998000,
                '.png,image/*'
              )}
            </div>
            <div className="row form-row justify-content-center justify-content-sm-start">
              {this.renderFilesUpload(
                'subImages',
                'Sub Images',
                'form-group',
                'form-label',
                true,
                {minWidth: '240px', minHeight: '150px'},
                'Drop your sub images here',
                10,
                2998000,
                '.png,image/*'
              )}
            </div>
          </AccordionTab>
          <AccordionTab header="Product Details">
            <div className="row form-row justify-content-center justify-content-sm-start">
              {this.renderInput(
                'name',
                'Product Name',
                'text',
                'form-group mb-1 col-md-6 col-sm-12',
                'form-label',
                'form-control outfit'
              )}
              {this.renderTextAreaInput(
                'description',
                'Product Description',
                'form-group mb-1',
                'form-label',
                'form-control outfit'
              )}
            </div>
            <div className="row form-row justify-content-center justify-content-sm-start">
              {this.renderInput(
                'price',
                'Product Price',
                'number',
                'form-group mb-1 col-md-5 col-sm-12',
                'form-label',
                'form-control outfit'
              )}
              {this.renderSelect(
                'priceCurrency',
                'Product Price Currency',
                this.props.priceCurrencies,
                'form-group mb-1 col-md-5 col-sm-12',
                'form-label',
                'form-control outfit'
              )}
            </div>
            <div className="row form-row justify-content-center justify-content-sm-start">
              {this.renderSelect(
                'inventoryStatus',
                'Inventory Status',
                this.props.inventoryStatuses,
                'form-group mb-1 col-md-5 col-sm-12',
                'form-label',
                'form-control outfit'
              )}
            </div>
            <div className="row form-row justify-content-center justify-content-sm-start">
              {this.renderSelect(
                'categoryId',
                'Category',
                getCategoriesOptions(this.props.categories),
                'form-group mb-1 col-md-8 col-sm-12',
                'form-label',
                'form-control outfit'
              )}
            </div>
          </AccordionTab>
          <AccordionTab header="Product Specifications">
            {this.state.data.specifications.map((spec, index) => {
              return (
                <div
                  key={index}
                  className="row form-row justify-content-center p-2 m-1"
                  style={{
                    backgroundColor: 'rgb(248,249,250)',
                    borderRadius: '5px',
                  }}>
                  {this.renderInput(
                    `specifications.name_$$$_${spec.id}`,
                    'Name',
                    'text',
                    'form-group mb-1 col-md-5 col-sm-12',
                    'form-label',
                    'form-control outfit',
                    true,
                    {},
                    '',
                    this.updateSpecNameHandler,
                    spec.name,
                    this.state.errors[`specifications.name_$$$_${spec.id}`]
                  )}
                  {this.renderInput(
                    `specifications.value_$$$_${spec.id}`,
                    'Value',
                    'text',
                    'form-group mb-1 col-md-5 col-sm-12',
                    'form-label',
                    'form-control outfit',
                    true,
                    {},
                    '',
                    this.updateSpecValueHandler,
                    spec.value,
                    this.state.errors[`specifications.value_$$$_${spec.id}`]
                  )}
                  <Button
                    onClick={() => this.removeSpecHandler(spec.id)}
                    style={{
                      width: 'auto',
                      height: '-webkit-fill-available',
                      marginTop: '32px',
                    }}>
                    <i
                      style={{
                        color: '#fe3f40',
                      }}
                      className="fa fa-trash"
                      aria-hidden="true"></i>
                  </Button>
                </div>
              );
            })}
            <div className="form-row d-flex p-3 justify-content-center">
              <Button onClick={this.addNewSpecHandler}>
                Add New Specification
              </Button>
            </div>
          </AccordionTab>
          <AccordionTab header="Stock Details">
            {this.state.data.stock.stockDetails.map((sd, index) => {
              return (
                <div
                  key={index}
                  className="row form-row justify-content-center p-2 m-1"
                  style={{
                    backgroundColor: 'rgb(248,249,250)',
                    borderRadius: '5px',
                  }}>
                  {this.renderInput(
                    `stock.stockDetails.size_$$$_${sd.id}`,
                    'size',
                    'text',
                    'form-group mb-1 col-md-5 col-sm-12',
                    'form-label',
                    'form-control outfit',
                    true,
                    {},
                    '',
                    this.updateStockDetailSizeHandler,
                    sd.size,
                    this.state.errors[`stock.stockDetails.size_$$$_${sd.id}`]
                  )}
                  {this.renderInput(
                    `stock.stockDetails.color_$$$_${sd.id}`,
                    'color',
                    'text',
                    'form-group mb-1 col-md-5 col-sm-12',
                    'form-label',
                    'form-control outfit',
                    true,
                    {},
                    '',
                    this.updateStockDetailColorHandler,
                    sd.color,
                    this.state.errors[`stock.stockDetails.color_$$$_${sd.id}`]
                  )}
                  {this.renderInput(
                    `stock.stockDetails.numAvailableInStock_$$$_${sd.id}`,
                    'Number Available In Stock',
                    'number',
                    'form-group mb-1 col-md-5 col-sm-12',
                    'form-label',
                    'form-control outfit',
                    true,
                    {},
                    '',
                    this.updateStockDetailNumStockHandler,
                    sd.numAvailableInStock,
                    this.state.errors[
                      `stock.stockDetails.numAvailableInStock_$$$_${sd.id}`
                    ]
                  )}
                  <Button
                    onClick={() => this.removeStockDetailHandler(sd.id)}
                    style={{
                      width: 'auto',
                      height: '-webkit-fill-available',
                      marginTop: '32px',
                    }}>
                    <i
                      style={{
                        color: '#fe3f40',
                      }}
                      className="fa fa-trash"
                      aria-hidden="true"></i>
                  </Button>
                </div>
              );
            })}
            <div className="form-row d-flex p-3 justify-content-center">
              <Button onClick={this.addNewStockDetailHandler}>
                Add New Stock Detail
              </Button>
            </div>
            {this.renderInput(
              'stock.totalNumAvailableInStock',
              'Total Number Available in Stock',
              'number',
              'form-group mb-1 col-md-5 col-sm-12',
              'form-label',
              'form-control outfit',
              true,
              {},
              '',
              this.updateTotalNumAvailableInStockHandler,
              this.state.data.stock.totalNumAvailableInStock,
              this.state.errors['stock.totalNumAvailableInStock'],
              this.state.data.stock.stockDetails.length > 0
            )}
          </AccordionTab>
        </Accordion>
        <div className="form-row d-flex p-3 justify-content-center">
          {this.renderButton(
            'Add Product',
            'submit',
            'btn btn-primary btn-block login-btn outfit login-submit-btn'
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.productsState.categories,
  };
}

export default withRouter(
  withTranslation()(connect(mapStateToProps)(AddProductAccordionForm))
);
