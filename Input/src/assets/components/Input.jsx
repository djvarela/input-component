
export const Input = ({typeIcon,helperText, icon ,label ='',type = 'text' , placeholder = 'Placeholder', disabled = null, size = '' , color='' }) => {
  
 
  return (
    <>
    <div className="buttonContainer">

    <label htmlFor="">{label}</label>
    <span className={typeIcon}>

      <input 
       type={type}
       disabled={disabled} 
       className={`${color} ${size}`} 
       placeholder={placeholder}
       
       />
         {icon == null ? '' : <span className="material-symbols-rounded">{icon}</span> }
       </span>

     {helperText == null ? '' : <small>{helperText}</small> }

       </div>
    </>
  )
}
