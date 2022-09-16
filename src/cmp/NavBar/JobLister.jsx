import React from 'react'
import { Link  } from 'react-router-dom'
import { logout } from '../../lib/Routes/store/slices/auth'
import { useDispatch } from 'react-redux'
import styles from './Nav.module.scss'


const JobLister = () => {
    const dispatch = useDispatch()
  
    const handleLogout = () => {
      dispatch(logout())
    }
  
    return (
      <div className="d-flex justify-content-between">
        <ul className={styles.menu} >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/publish-job">Publish jobs</Link>
          </li>
          <li>
             <Link to="/find-job" >Find Job</Link>
         </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
  
      </div>
    )
  }
  
  export default JobLister