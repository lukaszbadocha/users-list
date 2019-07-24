import React, {Component} from 'react';

import Heading from './Heading';
import UsersList from './UsersList';

class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: ['Adam', 'Olga', 'Karol', 'Łukasz']
        }
    }


    addUser = (e) => {
        e.preventDefault();
        /* this.state.users.push(this.userInput.value);
        console.log(this.state.users);
        this.setState({users: this.state.users}) */

        this.setState(prevState => {
            return ({users: prevState.users.concat(this.userInput.value)})
        })

    }

    deleteUser = (indexToDelete) => {
       let filteredArray = this.state.users.filter((elem, index) => {
           return index !== indexToDelete;
       });

       this.setState({users: filteredArray})
    }

    render() {

        return (
        
            <div className="users">
                <Heading title="User's list" />
                <Heading title="Lista użytkowników" />

                {/* Tutaj dodaj formularz z jednym inputem i buttonem submit */}
                
                <form onSubmit={this.addUser} className="add-user-form">
                    <input type="text" ref={input => this.userInput = input} />
                    <button>Add user</button>
                </form>
                
                <UsersList usersList={this.state.users} deleteUserFromList={this.deleteUser} />
                
            </div>
        );
    }
}

export default Users;