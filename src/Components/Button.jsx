

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor,fullwidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 w-[35%] hover:w-[38%] hover:py-5 hover:justify-center hover:z-10 transition-all py-4 border font-montserrat  text-lg leading-none
       ${backgroundColor ?`${backgroundColor} ${textColor} ${ borderColor}`:
      ' bg-coral-red  text-white  border-coral-red'} rounded-full ${fullwidth && "w-full"} `}>
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon " className="ml-2  rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button;
