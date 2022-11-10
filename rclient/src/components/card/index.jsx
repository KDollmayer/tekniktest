import React, {useEffect, useState} from 'react'
import { renderProducts } from '../../api/api'
import * as s from './styles'

export default function ProductCard() {

  const [productList, setProductList] = useState([])


  const fetchData = async () => {
      setProductList(renderProducts())
  }

  useEffect(()=> {
    fetchData()
  }, [])
  return (
    <s.Main>
      {productList.map((item) => {
         <s.Card> 
          <s.H1>{item.name}</s.H1>
          <s.H3>{item.price}</s.H3>
          <s.P>{item.description}</s.P>
          <s.H3>{item.weight}</s.H3>
          

         </s.Card>

      })}
     

    </s.Main>
  )
}
