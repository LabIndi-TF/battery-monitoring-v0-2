import React from 'react'
import { logout } from '../utils/xhr'

import Button from 'react-bootstrap/Button'

const LogoutPage = ({ history }) => (
    <div>
      <h1>Logout Page</h1>
      <p>
        Apakah anda yakin ingin Logout?
      </p>
      
      <Button onClick={() => {
        logout().then(() => {
            history.push('/auth')
        })
      }}>Logout</Button>
    </div>
  )
  
  export default LogoutPage