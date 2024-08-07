import clsx from 'clsx'
import PropTypes from 'prop-types'

export function Input({
  type = 'text',
  required,
  className,
  placeholder,
  ...props
}) {
  return (
    <label className="label">
      {placeholder}
      {required ? <span className="input-required">*</span> : null}
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className={clsx('input', className)}
          required={required}
          {...props}
        />
      </div>
    </label>
  )
}
Input.propTypes = {
  type: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
}
