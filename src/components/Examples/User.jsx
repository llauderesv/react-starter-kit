import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { userFetchRequested } from '../../actionCreators/user';

const User = ({ data, isFetching, fetchUser }) => {
  const tableBody = data.map(user => {
    const { id, first_name, last_name, email } = user;

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
      </tr>
    );
  });

  return (
    <div>
      <Button variant="primary" onClick={fetchUser} disabled={isFetching}>
        Fetch User
      </Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {isFetching ? (
            <tr>
              <td colSpan={4}>Loading...</td>
            </tr>
          ) : (
            tableBody
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default connect(
  state => state.user,
  dispatch => ({
    fetchUser: () => dispatch(userFetchRequested()),
  }),
)(User);
