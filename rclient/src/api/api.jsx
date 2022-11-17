
import axios from 'axios'



axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL


export const createProduct = async (name, description, price, weight) => {
      try {
        await axios.post("/products", {name, description, price, weight})
        window.location.reload()
      } catch (error) {
        console.error(error)
        return null
      }
}

export const renderProducts = async () => {
 
    try {

        const products = (await axios.get("products")).data
        
        return products
    } catch (error) {
        console.error(error)
        return null
    }
}
