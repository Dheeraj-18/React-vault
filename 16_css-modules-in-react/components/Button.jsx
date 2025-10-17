const Button = (props) => {
  const { imageUrl, title , clickHandler,children } = props           // Destructuring
  // console.log(children); 
  return (
    <button className="button" title={children} onClick={clickHandler}>
      {children}
      <img src={imageUrl} alt={children} />
    </button>
  )
}

export default Button
