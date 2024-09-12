import Button from "./Button"
const PasswordInput = ({placeholder, value, onChange}) => {
  return (
    <div>
    <input type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="input"/>
    </div>
  )
}

export default PasswordInput