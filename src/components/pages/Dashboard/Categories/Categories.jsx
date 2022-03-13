import './Categories.scss';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Accordion, AccordionTab} from 'primereact/accordion';
import Table from 'react-bootstrap/Table';

const Categories = withRouter((props) => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.productsState.categories);

  const renderSubCategories = (cat) => {
    if (cat.subCategories && cat.subCategories.length > 0) {
      return (
        <Accordion multiple>
          {cat.subCategories.map((subCat) => {
            return (
              <AccordionTab header={subCat.name}>
                <div className="row form-row p-3">
                  <Table striped bordered hover variant="dark">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{subCat.name}</td>
                      </tr>
                      {subCat.description && (
                        <tr>
                          <td>description</td>
                          <td>{subCat.description}</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
                {renderSubCategories(subCat)}
              </AccordionTab>
            );
          })}
        </Accordion>
      );
    } else {
      return null;
    }
  };

  return (
    <Row className="justify-content-center p-2">
      <Col md={9} xs={12} className="">
        <Accordion multiple>
          {categories.map((cat) => {
            return (
              <AccordionTab header={cat.name}>
                <div className="row form-row p-3">
                  <Table striped bordered hover variant="dark">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{cat.name}</td>
                      </tr>
                      {cat.description && (
                        <tr>
                          <td>description</td>
                          <td>{cat.description}</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
                {renderSubCategories(cat)}
              </AccordionTab>
            );
          })}
        </Accordion>
      </Col>
    </Row>
  );
});

export default Categories;
