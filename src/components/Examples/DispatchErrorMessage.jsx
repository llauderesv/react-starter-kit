import React from 'react';
import { connect } from 'react-redux';
import { showError, hideError } from '../../actionCreators/error';
import Button from 'react-bootstrap/Button';

const DisplayErrorMessage = ({ isShow, hideError, showError }) => {
  const message =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias eligendi ' +
    'culpa iure tempore recusandae totam maiores dolores, expedita accusamus ' +
    'voluptate deleniti, doloremque quia voluptatibus laudantium soluta exercitationem, aut consectetur.';

  return (
    <>
      <Button
        variant="primary"
        onClick={() =>
          !isShow ? showError({ error: 'Test Error', message }) : hideError()
        }>
        {!isShow ? 'Display error' : 'Hide error'}
      </Button>
    </>
  );
};

export default connect(
  state => state.error,
  dispatch => ({
    showError: payload => dispatch(showError(payload)),
    hideError: () => dispatch(hideError()),
  }),
)(DisplayErrorMessage);
