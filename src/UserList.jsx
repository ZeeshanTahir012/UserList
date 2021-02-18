import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const UserList=(props)=>{
    return (
    <>
        <div className='todoStyle'>
            <DeleteIcon  className="fa faTimes" area-hidden='true' onClick={()=>{props.onSelect(props.id);}} />
            <li>{`Hy! ${props.fname} ${props.lname} .`}  <span onClick={()=>{props.edit(props.id);}}>Edit</span></li>
            
        </div>
    </>);
};

export default UserList;
