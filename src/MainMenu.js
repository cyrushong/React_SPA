import React from 'react'
import { Link } from 'react-router-dom'

export default function MainMenu() {
  return (

    <div className='container'>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <h1>我既REACT練習主頁</h1>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-md-6 list-group border border-primary'>
                <Link to={'product_list'} className="list-group-item list-group-item-action" >買野食</Link>
                <Link to={'staffForm'} className="list-group-item list-group-item-action">Staff List</Link>
            </div>
        </div>

    </div>

  )

}
