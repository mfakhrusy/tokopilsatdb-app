import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';

const ImagePreview = ({
  src,
  crop,
  onCropChange,
  onCropComplete,
  onImageLoaded,
}) => {
  return (
    <div className="preview-container">
      <div className="preview">
        {
          !isEmpty(src) ? (
            <ReactCrop
              crop={crop}
              src={src}
              onChange={onCropChange}
              onComplete={onCropComplete}
              onImageLoaded={onImageLoaded}
            />
          ) : (
            <span>click here to upload/drag your image here</span>
          ) 
        }
      </div>
    </div>
  );
};

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired,
  crop: PropTypes.object.isRequired,
  onCropChange: PropTypes.func.isRequired,
  onCropComplete: PropTypes.func.isRequired,
  onImageLoaded: PropTypes.func.isRequired,
};

export default ImagePreview;
