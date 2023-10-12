import React from 'react'
interface ItemComponentProps  {
    item:CartItem
    addItem:() => void
    removeOne:() => void
    deleteItem:() => void
}
export default function CartItem({item,addItem,removeOne,deleteItem}:ItemComponentProps) {
  return (
    <>
    <div style={{border:"1px"}}>
        <div>amount: {item.amount}</div>
        <div>{item.product.name}</div>
        <div> price: {item.product.price}</div>
        <button onClick={() => addItem()}>+</button>
        <button onClick={() => removeOne()}>-</button>
        <button onClick={() => deleteItem()}>delete</button>
    </div>
    </>
  )
}
