import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import ModalUser from '../ModalUser/ModalUser';
import ModalConfirmDelete from '../ModalConfirmDelete/ModalConfirmDelete';

class TableUser extends Component {

  render() {

    let users = this.props.users;

    users = users.map((user) => 
      <Table.Row key={user._id}>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.age}</Table.Cell>
        <Table.Cell>{user.gender}</Table.Cell>
        <Table.Cell>
          <ModalUser
            headerTitle='Edit User'
            buttonTriggerTitle='Edit'
            buttonSubmitTitle='Simpan'
            buttonColor='blue'
            userID={user._id}
            onUserUpdated={this.props.onUserUpdated}
            server={this.props.server}
            socket={this.props.socket}
          />
          <ModalConfirmDelete
            headerTitle='Hapus User'
            buttonTriggerTitle='Hapus'
            buttonColor='black'
            user={user}
            onUserDeleted={this.props.onUserDeleted}
            server={this.props.server}
            socket={this.props.socket}
          />
        </Table.Cell>
      </Table.Row>
    );

    users =  [...users].reverse();

    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nama</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Umur</Table.HeaderCell>
            <Table.HeaderCell>Jenis Kelamin</Table.HeaderCell>
            <Table.HeaderCell>Aksi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users}
        </Table.Body>
      </Table>
    );
  }
}

export default TableUser;
