import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readUser } from '../features/UserDetailsSlice'
import { Link } from 'react-router-dom'
import { CustomModal } from './CustomModal'

export const Read = () => {
    const dispatch = useDispatch()
    const {users,loading} = useSelector((state) =>state.userData)
    // view single user
    const [id, setId] = useState()
    const [showPopup, setShowPopup] = useState(false)

    useEffect(()=>{
        dispatch(readUser())
    },[])

    if(loading){
      return <h4 style={{textAlign:"center"}}>loading</h4>
    }

  return (
    <>{showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}
      <h2 style={{textAlign:"center"}}>All data</h2>
      {users.length > 0 && users.map((ele) => (
              <div key={ele.id} className="card w-50 mx-auto my-2">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                  <p className="card-text">{ele.gender}</p>
                  <button
                    className="card-link"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <button to={`/edit/${ele.id}`} className="card-link">
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteUser(ele.id))}
                    className="card-link"
                  >
                    Delete
                  </button>
                </div>
                </div>))
      }
   

    </>
  )
}
