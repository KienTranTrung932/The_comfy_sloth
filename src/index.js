import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
import { Products } from './pages'
//dev--5fxqo-b.us.auth0.com
//m4lHmkwAr2ZwH5pIyRCwlWwJHAbsLfbu
ReactDOM.render(
<Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'>
    <UserProvider>
        <ProductsProvider>
            <FilterProvider>
                <CartProvider>
                    <App />
            </CartProvider>
            </FilterProvider> 
        </ProductsProvider>
    </UserProvider>
</Auth0Provider>
, document.getElementById('root'))
