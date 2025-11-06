import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}
