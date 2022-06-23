import React, { useEffect, useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';

import {useNavigate} from 'react-router-dom'
import { auth } from './firebase';

const Todo=()=>
{
    var today = new Date();
    var t=today.toUTCString()
        let navigate=useNavigate()
       var [arr,setArr]=useState([])
        var [value,setValue]=useState('')
        var[completed,setCompleted]=useState(false)
    useEffect(()=>{
        fetch("https://sainath-todolist.herokuapp.com/showtask",{
            method:"POST",
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json',

              }
        })
        .then(response => {
          return response.json()
          
        })
        .then(data => {
       console.log(data)
       let t=[]
       data.forEach(element => {
        t.push({value:element.tasks,createdon:element.createdon,completed:element.completed})
       });
setArr(t)
        })

    },[])
  

     var styles=completed?  {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}:null

    //add task
    const addTask=()=>{
       
       
        setArr(arr=>[...arr,{value,completed:0,createdon:t}])
        setValue('')
        fetch("https://sainath-todolist.herokuapp.com/todopage",{
            method:"POST",
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
              },body: [value,t]
        })
        .then(response => {
          return response.json()
          
        })
        .then(data => {
        })

    } 

    
    return(
        <div>
                  <br></br><br></br><br></br>
            <Button style={{color:'red',backgroundColor:'black'}} onClick={()=>{navigate('./profileupdate')}}>Update Profile </Button>
           <div className='signup'>
            <h1>Welcome {auth.currentUser.displayName}</h1>
            <h2>To Do List</h2>
            <TextField required value={value} label="Title..." onChange={(e)=>{ {setValue(e.target.value)}}}></TextField>
            <Button style={{backgroundColor:'aqua'}} onClick={addTask}> Add task </Button>
            {arr.map((val,ind)=>(
                <div>
                   { val.completed==1?
                <h4 style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{val.value}</h4>:<h4>{val.value}</h4>}
                <Button  style={{backgroundColor:'aqua'}} onClick={()=>{
                    // setCompleted(true)
                    let ele={value:val.value,completed:1}
                    let t=[...arr]
                    t[ind]=ele
                    
                    setArr(t)
                    fetch("https://sainath-todolist.herokuapp.com/completed",{
                        method:"POST",
                        mode: 'cors', 
                        headers: {
                            'Content-Type': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded',
                          },body: [val.value,val.createdon]
                    })
                    .then(response => {
                      return response.json()
                      
                    })
                    .then(data => {
                    })
                          }}>Mark As completed</Button> 

<br></br><br></br>
                          {/* delete */}
                <Button style={{backgroundColor:'aqua'}} onClick={()=>{
                    let t=arr.filter((v,i)=>{
                        return ind!==i
                    })
                    setArr(t)
                    console.log(val);
                    fetch("https://sainath-todolist.herokuapp.com/delete",{
            method:"POST",
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
              },body: [val.value,val.createdon]
        })
        .then(response => {
          return response.json()
          
        })
        .then(data => {
        })
                }}> Delete</Button>
                </div>
            ))}
            </div>
        </div>
    )
    
}
export {Todo}