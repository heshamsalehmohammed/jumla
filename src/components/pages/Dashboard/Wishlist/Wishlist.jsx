import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './Wishlist.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  wishlist_RemoveProduct,
  wislist_EmptyWishlist,
} from '../../../../redux/actionCreators/cartActionCreators';

const Wishlist = (props) => {
  const wishlistProducts = useSelector((state) => state.cartState.wishlistProducts);
  const wishlistProductsIds = wishlistProducts.map((cp) => cp.productId);
  const wishlistProductsDetails = useSelector((state) =>
    state.productsState.products.filter((p) => wishlistProductsIds.includes(p.id))
  );

  const dispatch = useDispatch();

  const removeAllHandler = () => {
    dispatch(wislist_EmptyWishlist());
  };

  const header = (
    <div className="table-header-container">
      <Button label="Remove All" onClick={removeAllHandler}>
        <i className="fa fa-trash m-1"></i> Remove All
      </Button>
    </div>
  );

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={rowData.mainImage}
        alt={rowData.mainImage}
        className="product-image"
      />
    );
  };

  const nameBodyTemplate = (rowData) => {
    return (
      <Link to={`/dashboard/productdetails/${rowData.id}`}>{rowData.name}</Link>
    );
  };

  const priceBodyTemplate = (rowData) => {
    return rowData.price + rowData.priceCurrency;
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <span
        className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>
        {rowData.inventoryStatus}
      </span>
    );
  };

  const categoryBodyTemplate = (rowData) => {
    return <span>{rowData.categoryName}</span>;
  };

  const trashClickHandler = (productId) => {
    dispatch(wishlist_RemoveProduct(productId));
  };


  const deleteBodyTemplate = (rowData) => {
    return (
      <span>
        <i
          style={{
            color: '#fe3f40',
          }}
          className="fa fa-trash cart-item-trash-icon"
          aria-hidden="true"
          onClick={() => trashClickHandler(rowData.id)}></i>
      </span>
    );
  };

  return (
    <Row className="justify-content-center cart-row p-2">
      <Col md={10} className="cart-column">
        <DataTable
          className="cart-datatable"
          value={wishlistProductsDetails}
          dataKey="id"
          header={header}>
          <Column field="name" header="Name" body={nameBodyTemplate} sortable />
          <Column header="Image" body={imageBodyTemplate} />
          <Column
            field="price"
            header="Price"
            sortable
            body={priceBodyTemplate}
          />
          <Column
            field="category"
            header="Category"
            sortable
            body={categoryBodyTemplate}
          />
          <Column
            field="inventoryStatus"
            header="Status"
            sortable
            body={statusBodyTemplate}
          />
          <Column field="delete" header="Delete" body={deleteBodyTemplate} />
        </DataTable>
      </Col>
    </Row>
  );
};

export default Wishlist;
