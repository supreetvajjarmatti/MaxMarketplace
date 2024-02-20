import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productID} = useParams()
  const product = all_product.fond((e)=>e.id===Number(productID))
  return (
    <div>
      
      
    </div>
  )
}

export default Product
