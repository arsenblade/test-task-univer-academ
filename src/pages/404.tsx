import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button/Button'

const Page404 = () => {
  return (
    <div>
      <h1 className="error404">404</h1>
      <Button style={{marginLeft: '40px'}}><Link to='/'>Вернутся обратно</Link></Button>
    </div>
  )
}

export default Page404