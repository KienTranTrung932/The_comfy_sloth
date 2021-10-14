import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  BAT_DAU_LAY_SAN_PHAM,
  LAY_SAN_PHAM_THANH_CONG,
  LAY_SAN_PHAM_THAT_BAI,
  BAT_DAU_LAY_CHI_TIET_SAN_PHAM,
  LAY_CHI_TIET_SAN_PHAM_THANH_CONG,
  LOI_LAY_CHI_TIET_SAN_PHAM,
} from '../actions'

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const laySanPham = async (url) => {
    dispatch({ type:  BAT_DAU_LAY_SAN_PHAM})
    try {
      const response = await axios.get(url)
      const products = response.data.results

      dispatch({ type: LAY_SAN_PHAM_THANH_CONG, payload: products })
    } catch (error) {
      dispatch({ type: LAY_SAN_PHAM_THAT_BAI })
      console.log(error)
    }
  }

  const layChiTietSanPham = async (url) => {
    dispatch({ type: BAT_DAU_LAY_CHI_TIET_SAN_PHAM })
    try {
      const response = await axios.get(url)
      const singleProduct = response.data.results
      console.log(singleProduct);
      dispatch({ type: LAY_CHI_TIET_SAN_PHAM_THANH_CONG, payload: singleProduct })
    } catch (error) {
      dispatch({ type:  LOI_LAY_CHI_TIET_SAN_PHAM })
    }
  }

  useEffect(() => {
    laySanPham(url)
  }, [])

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, layChiTietSanPham }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}



