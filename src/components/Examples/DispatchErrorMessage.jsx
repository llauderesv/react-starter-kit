import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { showError, hideError } from '../../actionCreators/error';
import Button from 'react-bootstrap/Button';

const DisplayErrorMessage = ({ isShow, hideError, showError }) => {
  return (
    <Fragment>
      <Button
        variant="primary"
        onClick={() =>
          !isShow
            ? showError({ error: 'Test Error', message: 'Test message' })
            : hideError()
        }>
        {' '}
        {!isShow ? 'Display error' : 'Hide error'}
      </Button>
    </Fragment>
  );
};

export default connect(
  state => state.error,
  dispatch => ({
    showError: payload => dispatch(showError(payload)),
    hideError: () => dispatch(hideError()),
  }),
)(DisplayErrorMessage);
