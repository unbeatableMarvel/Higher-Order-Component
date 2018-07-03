import React, { Component } from 'react';
import UserList from './UserList';
import Hoc from './Hoc';


const UsersData = [
  {
      id: 1,
      name: 'Rohit'
        
  },
  {
      id: 2,
      name: 'Rahul'
  },
  {
      id: 3,
      name: 'Rajat'
  },
  {
      id: 4,
      name: 'Abhay'
  }
];


const Users = Hoc(
  UserList,
  UsersData
);


class App extends Component {
  
  render() {
    return (
      <div>
        <Users></Users>
      </div>
    )
  }
}

export default App;