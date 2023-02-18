import './form-input.styles.scss'
const FormInput = ({ labelText, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {labelText && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {labelText}
        </label>
      )}
    </div>
  )
}

export default FormInput
