import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import QuantityBtn from './QuantityBtn'
import Title from './Title'

export default function ProductBill() {


    let {cartItems} = useContext(CartContext)
    /*
    let cartItem =
    {
        "cartItems":
        [
            {
                "id": 8,
                "name": "apple",
                "image": "",
                "price": 44,
                "quantity": 2,
            },
            {
                "id": 9,
                "name": "banana",
                "image": "",
                "price": 33,
                "quantity": 4,
            },
        ]
    }
    */
    
    // let {cartItems} = cartItem
    let cartEmpty = cartItems.length<=0?true:false
    let grandTotal = cartItems.reduce((total,product)=>{
        return total += product.price*product.quantity
    },0)
    const freeShipping = 99


  return (

    <div>
        <Title titlePara='畀錢'></Title>
        {
            cartEmpty &&
            <div>
                無哩件貨
                <br/><Link to="/">返去睇有咩揀</Link>
            </div>
        }
        {
            !cartEmpty &&
            <div className='container'>
                <div className='row'>
                    <div id="cartList" className='col-8'>
                        <div className='row'>
                        <table>
                            <tbody>
                        {
                            cartItems.map((cartItem)=>(
                                    
                                    <tr key={cartItem.id}>
                                            <td><img src={process.env.PUBLIC_URL+'/img/'+cartItem.pic} alt={cartItem.name} /> </td>
                                            <td>名稱: {cartItem.name}</td>
                                            <td><QuantityBtn productInfo={cartItem}/></td>
                                            <td>價錢: {cartItem.price}</td>
                                        
                                    </tr>
                                    
                            ))
                        }
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div id="calculation" className='col-4'>
                        <div className='row'>
                            <div>總數: {grandTotal}蚊</div>
                            {
                                grandTotal >= freeShipping ?
                                    <div>免送貨</div> :
                                    <div>滿${freeShipping}送貨, 還差${freeShipping-grandTotal}</div>
                            }
                            <div className='btn btn-primary'>埋單</div>
                        </div>
                    </div>  
                </div>          
            </div>    
        }
    </div>
  )
}
