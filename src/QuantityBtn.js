import React,{useContext, useState} from 'react'
import { CartContext } from './CartContext'


export default function QuantityBtn({productInfo}) {

  const {cartItems, setCartItems} = useContext(CartContext)
  
  let productIndexInCart = cartItems.findIndex((e)=>{
    return e.id === productInfo.id
  })

  let [numInCert, setNumInCert] = useState(
    productIndexInCart===-1 ? 0 : cartItems[productIndexInCart].quantity
  )
  
  const handleAdd = () =>{

    if(productIndexInCart===-1)
    {
      setCartItems(
        [
          {
            id: productInfo.id,
            name: productInfo.name,
            price: productInfo.price,
            pic: productInfo.pic,
            quantity: 1,
          },
          ...cartItems
        ]
      )

    }else{

      let newCartItems = [...cartItems]
      newCartItems[productIndexInCart].quantity++
      setCartItems(newCartItems)

    }

    setNumInCert(numInCert+1)
  }

  const handleSubtract = () =>{

    if(productIndexInCart === 1){
      let newCartItems = [...cartItems]
      newCartItems.splice(productIndexInCart,1)
      setCartItems(newCartItems)
    }else{
      let newCartItems = [...cartItems]
      newCartItems[productIndexInCart].quantity--
      setCartItems(newCartItems)        
    }

    setNumInCert(numInCert-1)
  }

  return (
    <div>
        {
            numInCert<=0 ?
            <div className='btn btn-primary' onClick={handleAdd}>加入購物車</div> :
            <div>
                <span className='btn btn-success' onClick={handleSubtract}>-</span>
                {numInCert}件
                <span className='btn btn-success' onClick={handleAdd}>+</span>
            </div>
        }
    </div>
  )



}
