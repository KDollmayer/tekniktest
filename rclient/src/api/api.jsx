import React from 'react'
import axios from 'axios'
import fetchData from '../components/card/index'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const createProduct = async (name, description, price, weight) => {
      try {
        await axios.post("/products", {name, description, price, weight})
        fetchData()
      } catch (error) {
        console.error(error)
        return null
      }
}

export const renderProducts = async () => {
    try {
        return (await axios.get("/products")).data
    } catch (error) {
        console.error(error)
    }
}
