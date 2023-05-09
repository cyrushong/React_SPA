import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { json } from 'react-router-dom';

export default function StaffForm() {

    const [details, setDetails]  = useState({
        staffName: "",
        post: "",
        salary: 0,
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        //const id = e.target.id
        //const name = e.target.name
        //const value = e.target.value;
        setDetails((prev)=>{
            return {...prev, [name]:value};
        })
    }
    
    console.log(details);

    const handleSubmit = (e) => {

        e.preventDefault();

        const url = 'http://localhost:8080/inputStaff'

        fetch(url,{
            method: 'POST', 
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html',
                "Content-Type": "application/json;"
            },
            body:JSON.stringify({
                staffName: details.staffName,
                salary: details.salary,
                post: details.post,      
            }),
        }).then(res=>{
            return res.json()
        })
        .then(data=>console.log(data))
        .catch(err=>console.log('ERROR'))


  /*      
        Axios.post(url,{
            staffName: details.staffName,
            salary: details.salary,
            post: details.post,
        })
        .then(res=>{
            console.log("result: " + res.data)
            console.log(res.data)
        })
       
*/

        console.log("--handleSubmit--");
    }

  return (
    <div>

        <div className='container px6 py6'>
            <h1>學生申請表</h1>
            <form id="staffForm" onSubmit={handleSubmit} className='form-group row needs-validation' noValidate>
                <div className='col-6'>
                    <label className='form-label'>Chinese Name</label>
                    <input className='form-control' id="staffName" name="staffName" type="text" onChange={handleChange}/>
                    <div className='invalid-feedback'>Please enter Chiese name</div>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className='col-6'>
                    <label className='form-label'>English Name</label>
                </div>      
                <div className='col-12'>
                    <label className='form-label'>Post</label>
                    <input className='form-control' id="post" name="post" type="text" onChange={handleChange}/>
                </div>
                <div className='col-12'>
                    <label className='form-label'>Salary</label>
                    <input className='form-control' id="salary" name="salary" type="text" onChange={handleChange}/>
                </div>    
                <div className='col-12'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>          
            </form>
        </div>

    </div>
  )
}
