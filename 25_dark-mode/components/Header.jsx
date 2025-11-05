import React, { useState } from 'react'

export default function Header() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem('isDarkMode'))
  )

  if (isDark) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the World?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark)
            localStorage.setItem('isDarkMode', !isDark)
          }}
        >
          <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`} />
          &nbsp; &nbsp;{isDark ? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>
  )
}
