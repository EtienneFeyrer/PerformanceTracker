const Button = ({label, onClick}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full w-full' onClick={onClick}>
        {label}
    </button>
  )
}

export default Button