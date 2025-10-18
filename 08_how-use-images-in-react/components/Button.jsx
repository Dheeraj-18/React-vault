const Button = (props) => {
  const { imageUrl, title } = props           // Destructuring of object 
  return (
    <button title={title}>
      <img src={imageUrl} alt={title} />
    </button>
  )
}

export default Button
