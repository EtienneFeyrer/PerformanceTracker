import Button from "./Button"
const UserInput = ({placeholder, value, onChange}) => {
  return (
    <div>
    <input type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="input w-full"/>
    </div>
  )
}

export default UserInput