import './Orders.scss';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router-dom';
import DPP from '../../../../assets/images/DPP.png';

const Orders = withRouter((props) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.ordersState.orders);

  const header = <div className="table-header-container"></div>;

  const orderIdBodyTemplate = (rowData) => {
    return (
      <Link to={`/dashboard/orderdetails/${rowData.id}`}>{rowData.id}</Link>
    );
  };
  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  };
  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.priceDetails.total);
  };

  const statusBodyTemplate = (rowData) => {
    return <span className="">{rowData.orderStatus}</span>;
  };

  const createdDateBodyTemplate = (rowData) => {
    return <span>{rowData.createdDate}</span>;
  };

  const orderedByBodyTemplate = (rowData) => {
    return (
      <div>
        <Link to={`/dashboard/userprofile/${rowData.orderedBy.userId}`}>
          <img className={'nav-profile-pic'} src={DPP} alt="profile" />
          {rowData.orderedBy.userName}
        </Link>
      </div>
    );
  };

  return (
    <Row className="justify-content-center orders-row p-2">
      <Col md={10} className="orders-column">
        <DataTable
          className="orders-datatable"
          value={orders}
          dataKey="id"
          /*           header={header} */
        >
          <Column field="id" header="Id" body={orderIdBodyTemplate} />
          <Column
            field="createdDate"
            header="Created Date"
            sortable
            body={createdDateBodyTemplate}
          />
          <Column
            field="orderdBy"
            header="Order By"
            body={orderedByBodyTemplate}
          />
          <Column
            field="price"
            header="Total Price"
            sortable
            body={priceBodyTemplate}
          />
          <Column
            field="status"
            header="Status"
            sortable
            body={statusBodyTemplate}
          />
        </DataTable>
      </Col>
    </Row>
  );
});

export default Orders;
