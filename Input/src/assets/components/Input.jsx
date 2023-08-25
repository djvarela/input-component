
export const Input = ({type = 'text' , placeholder = 'Placeholder', disabled = null, size = 'sm', color = ''}) => {
 
   
  return (
    <>
    <span>

    <label htmlFor="">.{`${color} ${size}`}</label>
    
      <input 
       type={type}
       disabled={disabled} 
       className={`${color} ${size}`} 
       placeholder={placeholder}
   
      
       />
       </span>
    </>
  )
}
