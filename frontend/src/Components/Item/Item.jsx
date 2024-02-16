import React from 'react'
import "./Item.css"

function Item(props) {
  return (
    <div className='item'>
        <img src={props.img} alt="" />
        <p>{props.name}</p>
        <div className='item-price'>
            <div className='item-price-now'>
                {props.new_price}
            </div>
            <div className='item-price-old'>
                {props.old_price}
            </div>
        </div>
      
    </div>
  )
}

export default Item
