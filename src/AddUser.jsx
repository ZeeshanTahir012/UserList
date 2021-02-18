import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserList from './UserList';

const AddUser=()=>{
  const[inde,setinde]=useState(-1);
  const [record,setrecord]=useState([]);
  const [data, setdata]=useState({fname:'', lname:'', address:'', phone:'', });
  const inputEvent=(event)=> {
    const value =event.target.value;
    const name=event.target.name;
    setdata( (preValue)=>{ return{...preValue, [name]:value, }});
  };
  const edit=(id)=>{
    if(data.fname==='' && data.lname==='' && data.phone==='' && data.address===''){
      setdata({fname:record[id].fname, lname:record[id].lname, phone:record[id].phone,address:record[id].address, });
      setinde(id);    
    } else alert('There is already data in the fields please edit it first');
  }
  const submit=()=>{
    if(inde!==-1){
      record[inde].fname=data.fname;
      record[inde].lname=data.lname;
      record[inde].address=data.address;
      record[inde].phone=data.phone;
      setdata({fname:'',lname:'',phone:'',address:'',});
      setinde(-1);
    }else if(data.fname!=='' && data.lname!=='' && data.phone!=='' && data.address!==''){
      setrecord((oldItems)=>{return [...oldItems,data]; });
      setdata({fname:'',lname:'',phone:'',address:'',});
    }else{alert('Please Fill all the fields it is mendatory');}
  }
  const deletetItem=(id)=>{
    if(data.fname==='' && data.lname==='' && data.phone==='' && data.address===''){
    setrecord((oldRecord)=>{return oldRecord.filter((arrelement, index)=>{return index!==id;}); });
    }else {alert('Please completet data in the fields first')}
  };
  return(
    <>
      <div className='main_div'>
        <div className='center_div' >
        <h1>User's List</h1>
        <input type='text' placeholder='First name'  name='fname' value={data.fname} autoComplete="off" onChange={inputEvent}/>
        <input type='text' placeholder='Last name'  name='lname' value={data.lname} autoComplete="off" onChange={inputEvent}/>
        <input type='text' placeholder='Address'  name='address' value={data.address} autoComplete="off" onChange={inputEvent}/>
        <input type='number' placeholder='Phone no'  name='phone' value={data.phone} autoComplete="off" onChange={inputEvent}/>
        <Button variant="contained" color="primary" className='bott' onClick={submit}>Add User</Button>
        <ol>
          {record.map((itemval, index)=>{
              return <UserList fname={itemval.fname} lname={itemval.lname} address={itemval.address} phone={itemval.phone} id={index} key={index} onSelect={deletetItem} edit={edit}/>
          })}
        </ol>
        </div>
      </div>
    </>
  );
}
export default AddUser;