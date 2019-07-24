import React from 'react';


const UsersList = props => {
    console.log(props);
    return (
        <ul className="users-list">
            {props.usersList.map((user,index) => {
                return <li key={index} className="user-item" onClick={()=>{props.deleteUserFromList(index)}}>{user}</li>
            })}
        </ul>
    );
   
}




export default UsersList;



