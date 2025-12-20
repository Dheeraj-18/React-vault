import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const CartIcon = new URL('../assets/cart-icon.svg', import.meta.url)
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsData } from '../store/slices/productsSlice'
import { fetchCartItemsData } from '../store/slices/cartSlice'

export default function Header() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductsData())
    dispatch(fetchCartItemsData())
  }, [])
  const cartItems = useSelector((state) => state.cartItems.list)
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon.href} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </div>
        </Link>
      </div>
    </header>
  )
}
