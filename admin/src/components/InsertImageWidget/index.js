import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { isEmpty } from 'lodash';

import ImagePreview from './ImagePreview';

import './index.scss';

class InsertImageWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgName: '',
      src: '',
      crop: {
        aspect:16/9,
        width: 50,
        x: 0,
        y: 0,
      }
    };
  }
  
  onDrop = (acceptedFiles, rejectedFiles) => {
    const { onSelectImage } = this.props;

    this.setState({ imgName: acceptedFiles[0].name, file: acceptedFiles[0] });

    onSelectImage(acceptedFiles[0]);

    this.handlePreview(acceptedFiles);
  }

  onChangeImage = (e) => {
    const { files } = e.target;
    const { onSelectImage } = this.props;

    this.setState({ imgName: files[0].name, file: files[0] });

    onSelectImage(files[0]);

    this.handlePreview(files);
  }

  onCropChange = (crop) => {
    this.setState({ crop });
  }

  onCropComplete = async (crop, pixelCrop) => {
    const { onSelectImage } = this.props;
    const { imgName } = this.state;

    const croppedImage = await this.handleCroppedImage(this.imageRef, pixelCrop, imgName);

    const fileCroppedImage = new File([croppedImage], imgName);

    onSelectImage(fileCroppedImage);

  }

  handlePreview = (files) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.setState({ src: reader.result });
    });
    reader.readAsDataURL(files[0]);
  }

  handleCroppedImage = (image, pixelCrop, filename) => {
    const canvas = document.createElement('canvas');

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          blob.name = filename;

          resolve(blob);
  
        }
      }, 'image/jpeg');
    });
  }

  onImageLoaded = (image, pixelCrop) => {
    this.imageRef = image;
  }

  render() {
    const { label } = this.props;
    const { src, crop } = this.state;

    return (
      <div className="insert-image">
        <h4>{`${label} Thumbnail`}</h4>
        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps }) => {
            return (
              <div {...getRootProps()} className="image-dropzone">
                {
                  isEmpty(src) ? (<input {...getInputProps()} />) : null
                }
                <ImagePreview
                  src={src}
                  crop={crop}
                  onCropChange={this.onCropChange}
                  onCropComplete={this.onCropComplete}
                  onImageLoaded={this.onImageLoaded}
                />
              </div>
            );
          }}
        </Dropzone>
        {
          !isEmpty(src) ? (
            <React.Fragment>
              <label htmlFor="change-image" className="change-image-label">
                Change Image
              </label>
              <input type="file" id="change-image" onChange={this.onChangeImage} hidden />
            </React.Fragment>
          ) : null
        }
      </div>
    );
  }
}

InsertImageWidget.propTypes = {
  label: PropTypes.string,
  onSelectImage: PropTypes.func.isRequired,
};

InsertImageWidget.defaultProps = {
  label: 'Image',
};

export default InsertImageWidget;
