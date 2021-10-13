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

class AddProductAccordionForm extends Form {
  constructor(props) {
    super(props);
    this.getCategoryOptions = this.getCategoryOptions.bind(this);
    this.getCategoriesOptions = this.getCategoriesOptions.bind(this);

    this.updateSpecNameHandler = this.updateSpecNameHandler.bind(this);
    this.updateSpecValueHandler = this.updateSpecValueHandler.bind(this);
    this.updateSizeNameHandler = this.updateSizeNameHandler.bind(this);
    this.updateSizeNumStockHandler = this.updateSizeNumStockHandler.bind(this);
  }

  state = {
    data: {
      name: '',
      description: '',
      totalNumAvailableInStock: 0,
      specifications: [],
      price: 0,
      priceCurrency: 'EGP',
      mainImage: [],
      subImages: [],
      hasSizes: false,
      sizes: [],
      inventoryStatus: '',
      categoryId: 0,
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label('Product Name'),
    description: Joi.string().required().label('Product Description'),
    totalNumAvailableInStock: Joi.number()
      .required()
      .label('Available In Stock'),
    specifications: Joi.array().items(
      Joi.object().keys({
        id: Joi.string().required(),
        name: Joi.string().required(),
        value: Joi.string().required(),
      })
    ),
    price: Joi.number().greater(0).required().label('Product Price'),
    priceCurrency: Joi.string().required().label('Product Price Currency'),
    mainImage: Joi.array().length(1).required(),
    subImages: Joi.array(),
    hasSizes: Joi.boolean().required(),
    sizes: Joi.array().items(
      Joi.object().keys({
        id: Joi.string().required(),
        name: Joi.string().required(),
        numAvailableInStock: Joi.number().greater(0).required(),
      })
    ),
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
      debugger;
      _this.setState({
        ..._this.state,
        data: {
          ..._this.state.data,
          mainImage: imgFiles,
        },
      });
    });
  }

  getCategoryOptions = (category, path) => {
    let catOptions = [];
    catOptions.push({
      _id: category.id,
      name: path ? `${path} / ${category.name}` : category.name,
    });
    if (category.subCategories && category.subCategories.length > 0) {
      category.subCategories.forEach((subCat) => {
        catOptions = catOptions.concat(
          this.getCategoryOptions(subCat, category.name)
        );
      });
    }
    return catOptions;
  };

  getCategoriesOptions = (categories) => {
    let catOptions = [];
    categories.forEach((cat) => {
      catOptions = catOptions.concat(this.getCategoryOptions(cat));
    });
    return catOptions;
  };

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

  addNewSizeHandler = () => {
    const uniqueId = uuidv4();
    this.schema = {
      ...this.schema,
      [`sizes.name_$$$_${uniqueId}`]: Joi.string().required().label('Name'),
      [`sizes.value_$$$_${uniqueId}`]: Joi.number()
        .greater(0)
        .required()
        .label('Number Available'),
    };
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        sizes: [
          ...this.state.data.sizes,
          {id: uniqueId, name: '', numAvailableInStock: 0},
        ],
        hasSizes: true,
      },
    });
  };

  removeSizeHandler = (uniqueId) => {
    const newSchema = {
      ...this.schema,
    };

    delete newSchema[`sizes.name_$$$_${uniqueId}`];
    delete newSchema[`sizes.numAvailableInStock_$$$_${uniqueId}`];

    this.schema = newSchema;

    const newSizes = [...this.state.data.sizes].filter(
      (spec) => spec.id !== uniqueId
    );

    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        sizes: newSizes,
        hasSizes: newSizes.length > 0,
      },
    });
  };

  getIdFromName = (name) => {
    return name.split('_$$$_')[1];
  };

  updateSpecNameHandler = (name, newValue) => {
    this.setState({
      ...this.state,
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
  updateSpecValueHandler = (name, newValue) => {
    this.setState({
      ...this.state,
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
  updateSizeNameHandler = (name, newValue) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        sizes: [
          ...this.state.data.sizes.map((_size) => {
            return {
              ..._size,
              name:
                _size.id === this.getIdFromName(name) ? newValue : _size.name,
            };
          }),
        ],
      },
    });
  };
  updateSizeNumStockHandler = (name, newValue) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        sizes: [
          ...this.state.data.sizes.map((_size) => {
            return {
              ..._size,
              numAvailableInStock:
                _size.id === this.getIdFromName(name)
                  ? newValue
                  : _size.numAvailableInStock,
            };
          }),
        ],
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
                [{_id: 'EGP', name: 'EGP'}],
                'form-group mb-1 col-md-5 col-sm-12',
                'form-label',
                'form-control outfit'
              )}
            </div>
            <div className="row form-row justify-content-center justify-content-sm-start">
              {this.renderInput(
                'totalNumAvailableInStock',
                'Total Number Available in Stock',
                'number',
                'form-group mb-1 col-md-5 col-sm-12',
                'form-label',
                'form-control outfit'
              )}
              {this.renderSelect(
                'inventoryStatus',
                'Inventory Status',
                [
                  {_id: 'instock', name: 'In Stock'},
                  {_id: 'outofstock', name: 'Out Of Stock'},
                  {_id: 'lowstock', name: 'Low Stock'},
                ],
                'form-group mb-1 col-md-5 col-sm-12',
                'form-label',
                'form-control outfit'
              )}
            </div>
            <div className="row form-row justify-content-center justify-content-sm-start">
              {this.renderSelect(
                'categoryId',
                'Category',
                this.getCategoriesOptions(this.props.categories),
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
                    this.updateSpecNameHandler
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
                    this.updateSpecValueHandler
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
          <AccordionTab header="Product Sizes">
            {this.state.data.sizes.map((size, index) => {
              return (
                <div
                  key={index}
                  className="row form-row justify-content-center p-2 m-1"
                  style={{
                    backgroundColor: 'rgb(248,249,250)',
                    borderRadius: '5px',
                  }}>
                  {this.renderInput(
                    `sizes.name_$$$_${size.id}`,
                    'Name',
                    'text',
                    'form-group mb-1 col-md-5 col-sm-12',
                    'form-label',
                    'form-control outfit',
                    true,
                    {},
                    '',
                    this.updateSizeNameHandler
                  )}
                  {this.renderInput(
                    `sizes.numAvailableInStock_$$$_${size.id}`,
                    'Number Available In Stock',
                    'number',
                    'form-group mb-1 col-md-5 col-sm-12',
                    'form-label',
                    'form-control outfit',
                    true,
                    {},
                    '',
                    this.updateSizeNumStockHandler
                  )}
                  <Button
                    onClick={() => this.removeSizeHandler(size.id)}
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
              <Button onClick={this.addNewSizeHandler}>Add New Size</Button>
            </div>
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
