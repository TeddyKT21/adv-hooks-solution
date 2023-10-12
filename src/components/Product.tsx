interface ProductComponentProps  {
    product:Product
    addProduct:() => void
}
export default function Product({product,addProduct}:ProductComponentProps) {
  return (
    <div style={{border:"1px"}}>
        <div>{product.name}</div>
        <div> price: {product.price}</div>
        <button onClick={() => addProduct()}>add to cart</button>
    </div>
  )
}
