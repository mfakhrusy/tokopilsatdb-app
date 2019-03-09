import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { connect } from 'react-redux';

import * as MISC_ACT from 'actions/misc';

import Spinner from 'components/Spinner';
import CloseIcon from 'components/CloseIcon';
import CheckIcon from 'components/CheckIcon';

import './index.scss';

class ModalInfo extends Component {
  toggleModal = () => {
    const { modal, showModal } = this.props;

    showModal(!modal.show);
  }

  render() {
    const { modal, message, success } = this.props;
    let spinnerColor = 'grey';

    if (modal.loading === false) {
      if (success) {
        spinnerColor = '#03D58F';
      } else {
        spinnerColor = 'red';
      }
    }

    return (
      <Modal
        isOpen={modal.show}
        toggle={this.toggleModal}
        className="modal-info"
      >
        <ModalHeader>
          <CloseIcon onClick={this.toggleModal} dimension={24} button />
        </ModalHeader>
        <ModalBody>
          <div className="logo">
            <Spinner
              color={spinnerColor}
              dimension={80}
              loading={modal.loading}
            />
            <div className={`icon ${success ? 'success' : 'failure'} ${modal.loading ? 'loading' : ''}`}>
              {success ? <CheckIcon dimension={50} color="#03D58F" /> : <CloseIcon dimension={50} color="red" />}
            </div>
          </div>
          <div className="content">
            {message}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={this.toggleModal}
            className={`${success ? 'success' : 'failure'}`}
          >
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

ModalInfo.propTypes = {
  modal: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  message: PropTypes.string,
};

ModalInfo.defaultProps = {
  loading: false,
  success: true,
  message: 'Success',
};

const mapStateToProps = (state) => {
  return {
    modal: state.misc.modalInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (payload) => dispatch(MISC_ACT.showModalInfo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalInfo);
