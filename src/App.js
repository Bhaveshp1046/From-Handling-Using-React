import React, { useState } from 'react'

const App = () => {

  // state defined
  const[fname,setFname] = useState('bhavesh');
  const[lname,setlname] = useState('');

  const[email,setEmail] = useState('');
  const[pass,setPass] = useState('');

  const[skill,setskill] = useState('');
  const[doc,setDoc] = useState('');

  // 2
  const GetUserName = (e) => {
    console.log(e.target.value)
  }

  // 3
  // setFname(e.target.value)


  return (
   <>
   
   <div className="container-fluid ">
    <div className="row fw-bold">
      <div className="col-md-12 bg-dark p-4 my-3 text-light text-center">
        <h1>Form Handling In React Functional Component </h1>
      </div>


      <div className="col-md-12">
        {/* nested grid */}

        <div className="row">

          <div className="col-md-6 my-3">
            <div className="form-group">
              <label htmlFor=''>Enter Your FirstName</label>
              <input type='text' placeholder='enter your name' value={fname} onChange={(e)=> GetUserName(e.target.value)} className='form-control' name='userfname' id='userfname'></input>
            </div>
           </div>

           <div className="col-md-6 my-3">
            <div className="form-group">
              <label htmlFor=''>Enter Your LastName</label>
              <input type='text' placeholder='enter your lname' value={lname} onChange={(e)=> setlname(e.target.value)} className='form-control' name='userlname' id='userlname'></input>
            </div>
           </div>

           <div className="col-md-6 my-3">
            <div className="form-group">
              <label htmlFor=''>Enter Your Email</label>
              <input type='email' placeholder='enter your email'value={email} onChange={(e)=> setEmail(e.target.value)} className='form-control' name='useremail' id='useremail'></input>
            </div>
           </div>

           
           <div className="col-md-6 my-3">
            <div className="form-group">
              <label htmlFor=''>Enter Your Password</label>
              <input type='pass' placeholder='enter your Password' value={pass} onChange={(e)=> setPass(e.target.value)} className='form-control' name='userpass' id='userpass'></input>
            </div>
           </div>

           <div className="col-md-12 my-2">
            <div className="from-group">
              <label htmlFor=''>Choose Your Skill</label>
              <select name='userskill' id='userskill' className='form-control' value={skill} onChange={(e)=> setskill(e.target.value)}>
                <option value="None">_Select</option>
                <option value="React js">React JS</option>
                <option value="Modern JS"> Modern JS</option>
                <option value="Mongo DB"> Mongo DB</option>
                <option value="Node JS"> Node JS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Bootstrap">Bootstrap</option>
                <option value="other">Other</option>
              </select>
            </div>
           </div>

           <div className="col-md-12 my-3">
            <div className="form-group">
              <label htmlFor=''>Upload Documents</label>
              <input type='file' name='doc' id='doc' className='form-control'></input>
            </div>
           </div>

           <div className="col-md-12 text-center my-3">
            <button className='btn btn-danger px-3 fw-bold '>Get A Quote</button>
           </div>



        </div>


      </div>
    </div>

   </div>
   
   </>
  )
}

export default App
