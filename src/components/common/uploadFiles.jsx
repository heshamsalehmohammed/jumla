import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {languages} from './enums';
import {Dropzone, FileItem, FullScreenPreview} from '@dropzone-ui/react';

const UploadFiles = ({
  name,
  label,
  error,
  groupClasses,
  labelClasses,
  hasLabel,
  value,
  onChange,
  DropzoneStyles,
  DropzoneLabel,
  DropzoneMaxFiles,
  DropzoneMaxFileSize,
  DropzoneAccept,
}) => {
  const {t, i18n} = useTranslation();

  const updateMainImageFiles = (newValues) => {
    onChange({
      currentTarget: {
        name: name,
        value: newValues,
      },
    });
  };
  const onDeleteMainImage = (id) => {
    const newValues = value.filter((x) => x.id !== id);
    onChange({
      currentTarget: {
        name: name,
        value: newValues,
      },
    });
  };

  const [imageSrc, setImageSrc] = useState(undefined);
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };

  return (
    <div className={groupClasses}>
      {hasLabel && <label className={labelClasses}>{label}</label>}
      <Dropzone
        style={DropzoneStyles}
        onChange={updateMainImageFiles}
        value={value}
        maxFiles={DropzoneMaxFiles}
        maxFileSize={DropzoneMaxFileSize}
        label={DropzoneLabel}
        accept={DropzoneAccept}>
        {value.map((file, index) => (
          <FileItem
            key={index}
            {...file}
            onDelete={onDeleteMainImage}
            onSee={handleSee}
            preview
            info
            hd
          />
        ))}
        <FullScreenPreview
          imgSource={imageSrc}
          openImage={imageSrc}
          onClose={(e) => handleSee(undefined)}
        />
      </Dropzone>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default UploadFiles;
