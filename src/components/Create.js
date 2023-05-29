import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/UserDetailsSlice'
import { useNavigate } from 'react-router-dom'


export const Create = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const [users, setUsers] = useState({})

const getUserData =(e)=>{
setUsers({...users,[e.target.name]:e.target.value})
}

const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(users)
    dispatch(createUser(users))
    navigate("/read")
}

  return (
    <div>
    <h2 className="my-2" style={{textAlign:"center"}}>Fill the data</h2>
    <form className="w-50 mx-auto my-5" 
    onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={getUserData}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={getUserData}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          type="text"
          name="age"
          className="form-control"
          onChange={getUserData}
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-check-input"
          name="gender"
          value="Male"
          type="radio"
          onChange={getUserData}
          required
        />
        <label className="form-check-label">Male</label>
      </div>
      <div className="mb-3">
        <input
          className="form-check-input"
          name="gender"
          value="Female"
          type="radio"
          onChange={getUserData}
        />
        <label className="form-check-label">Female</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);
}
