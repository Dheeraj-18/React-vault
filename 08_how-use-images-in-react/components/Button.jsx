const Button = (props) => {
  const { imageUrl, title } = props           // Destructuring 
  return (
    <button title={title}>
      <img src={imageUrl} alt={title} />
    </button>
  )
}

export default Button
