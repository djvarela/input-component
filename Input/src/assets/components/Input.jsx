export const Input = ({
  typeIcon,
  helperText,
  icon,
  label = "",
  type = "text",
  placeholder = "Placeholder",
  disabled = null,
  size = "",
  color = "",
  value = null,
  multiline,
  rows = "10",
}) => {
  


  return (
    <>
      <div className="buttonContainer">
        <label htmlFor="">{label}</label>
        <span className={typeIcon}>
          {multiline == "true" ? (
            <textarea
              rows={rows}
              disabled={disabled}
              className={`${color} ${size}`}
            >
              {value == null ? "placeholder" : value}
            </textarea>
          ) : (
            <input
              type={type}
              className={`${color} ${size}`}
              placeholder={placeholder}
              value={value}
              disabled={disabled}
            
              
            />
          )}

          {icon == null ? ( "" ) : 
          (
            <span className="material-symbols-rounded">{icon}</span>
          )}
        </span>

        {helperText == null ? "" : <small>{helperText}</small>}
      </div>
    </>
  );
};
