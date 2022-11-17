import React, { useState } from 'react'
import * as s from './styles'
import { createProduct } from '../../api/api'

export default function InputSection() {
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productWeight, setProductWeight] = useState("")
  const [productDescription, setProductDescription] = useState("")
  
  

 

  return (
    <s.InputDiv>
      <s.H1>Add Product</s.H1>
      
      <s.Input placeholder='Product Name' type="text" required value={productName} onChange={(e) => setProductName(e.target.value)}/>
      <s.Input placeholder='Price - Sek' type="text" required value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
      <s.Input placeholder='Weight - kg' type="text" required value={productWeight} onChange={(e) => setProductWeight(e.target.value)}/>
      <s.TextArea placeholder='Description' requiredvalue={productDescription} onChange={(e) => setProductDescription(e.target.value)}/>
      <s.Button onClick={() => createProduct(productName,productDescription,productPrice,productWeight)}>Add Product</s.Button>
    
    </s.InputDiv>
  )
}
