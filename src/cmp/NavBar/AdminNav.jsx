import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../lib/Routes/store/slices/auth';
import { Link } from 'react-router-dom';


const AdminNav = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="d-flex justify-content-between">
      <ul >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/publish-job">Publish a job</Link>
        </li>
        <li>
          <Link to="/find-job">Find a new job</Link>
        </li>
        <li>
          <Link to="/admin-profile">Profile</Link>
        </li>
      </ul>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AdminNav