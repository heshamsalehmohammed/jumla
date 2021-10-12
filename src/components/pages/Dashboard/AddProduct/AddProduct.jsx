import './AddProduct.scss';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Dropzone, FileItem, FullScreenPreview} from '@dropzone-ui/react';

const AddProduct = withRouter((props) => {
  const dispatch = useDispatch();

  const [mainImagefiles, setMainImageFiles] = useState([]);
  const [imageSrcMainImage, setImageSrcMainImage] = useState(undefined);
  const updateMainImageFiles = (incommingMainImageFiles) => {
    setMainImageFiles(incommingMainImageFiles);
  };
  const onDeleteMainImage = (id) => {
    setMainImageFiles(mainImagefiles.filter((x) => x.id !== id));
  };
  const handleSeeMainImage = (imageSource) => {
    setImageSrcMainImage(imageSource);
  };

  const [subImagesfiles, setSubImagesFiles] = useState([]);
  const [imageSrcSubImage, setImageSrcSubImage] = useState(undefined);
  const updateSubImagesFiles = (incommingSubImageFiles) => {
    setSubImagesFiles(incommingSubImageFiles);
  };
  const onDeleteSubImage = (id) => {
    setSubImagesFiles(subImagesfiles.filter((x) => x.id !== id));
  };
  const handleSeeSubImage = (imageSource) => {
    setImageSrcSubImage(imageSource);
  };

  return (
    <Row className="justify-content-center p-2">
      <Col md={8} xs={12} className="">
        <div className="row form-row justify-content-center justify-content-sm-start">
          <div className="form-group">
            <label className="form-label">Main Image</label>
            <Dropzone
              style={{minWidth: '260px', minHeight: '150px'}}
              onChange={updateMainImageFiles}
              value={mainImagefiles}
              maxFiles={1}
              maxFileSize={2998000}
              label={'Drop your main image here'}
              accept=".png,image/*">
              {mainImagefiles.map((file) => (
                <FileItem
                  {...file}
                  onDelete={onDeleteMainImage}
                  onSee={handleSeeMainImage}
                  preview
                  info
                  hd
                />
              ))}
              <FullScreenPreview
                imgSource={imageSrcMainImage}
                openImage={imageSrcMainImage}
                onClose={(e) => handleSeeMainImage(undefined)}
              />
            </Dropzone>
          </div>
          <div className="form-group mt-2">
            <label className="form-label">Sub Images</label>
            <Dropzone
              style={{minWidth: '260px', minHeight: '150px'}}
              onChange={updateSubImagesFiles}
              value={subImagesfiles}
              maxFiles={10}
              maxFileSize={2998000}
              label={'Drop your sub images here'}
              accept=".png,image/*">
              {subImagesfiles.map((file) => (
                <FileItem
                  {...file}
                  onDelete={onDeleteSubImage}
                  onSee={handleSeeSubImage}
                  preview
                  info
                  hd
                />
              ))}
              <FullScreenPreview
                imgSource={imageSrcSubImage}
                openImage={imageSrcSubImage}
                onClose={(e) => handleSeeSubImage(undefined)}
              />
            </Dropzone>
          </div>
        </div>
      </Col>
    </Row>
  );
});

export default AddProduct;
