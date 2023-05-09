import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import Title from './Title'

export default function ProductList() {
/*
    useEffect(()=>{
        fetch('')
            .then(response => response.json())
            .then(data => setProductList(data))
    },[])
*/
    let productList = [
        {"id":1, "name":"meat", "price":5, "pic":"1.jpg"},
        {"id":2, "name":"egg", "price":8, "pic":"2.jpg"},
        {"id":3, "name":"rice", "price":35, "pic":"3.jpg"},
    ]

    const[showMenu, setShowMenu] = useState(true)

  return (
    <div>
        {!showMenu && <button onClick={()=>{setShowMenu(true)}}>Show the menu</button>}<br/>
        {showMenu && <button onClick={()=>{setShowMenu(false)}}>Hide the menu</button>}<br/> 
        <Title titlePara='揀食乜'></Title>
        <div className="container-flex">
            {
                showMenu && productList.map(product=>(
                    <div className='containerItem' key={product.id}>
                        <Link to={'/product_detail/'+product.id}>
                            <img src={process.env.PUBLIC_URL+'/img/'+product.pic} alt={product.name} />                         
                        </Link>                        
                        <div>{product.name}</div>
                        <div>{product.price}蚊/一碗</div>
                        <QuantityBtn productInfo={product}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
