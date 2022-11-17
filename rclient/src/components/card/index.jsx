import React, {useEffect, useState} from 'react'
import { renderProducts } from '../../api/api'
import * as s from './styles'

export default function ProductCard() {

  const [productList, setProductList] = useState([])


  const fetchData = async () => {
    return await renderProducts()
      
      
  }

  useEffect(()=> {
    fetchData().then(setProductList).catch(()=> {
      setProductList([])
    })
  }, [])
  return (
    <s.Main>
      <>{console.log(productList)}</>
      {productList.map((item) => {
        return (
         <s.Card key={item._id}> 
          <s.H1>{item.name}</s.H1>
          <s.H3>{item.price}</s.H3>
          <s.P>{item.description}</s.P>
          <s.PW>{item.weight}</s.PW>
          

         </s.Card>
        )
      })}
     

    </s.Main>
  )
}
