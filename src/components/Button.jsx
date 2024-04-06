import './Button.css'

const Button = ({ text, type, onClick }) => {
  return (
    <button className={`Button Button_${type}`} onClick={onClick}>
      {text ?? '버튼'}
    </button>
  )
}

export default Button
