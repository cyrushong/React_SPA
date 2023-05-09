import React from 'react'
import {useParams, Link} from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import Title from './Title'

export default function ProductDetail() {

    let param = useParams()

  return (
    <div>
        <Title titlePara='食物簡介'></Title>
        <Link to="/">Back to Main Page</Link>
    </div>
  )
}
