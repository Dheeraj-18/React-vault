const Button = (props) => {
  const { imageUrl, title , clickHandler } = props           // Destructuring 
  return (
    <button title={title} onClick={clickHandler}>
      <img src={imageUrl} alt={title} />
    </button>
  )
}

export default Button
