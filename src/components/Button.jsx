import clsx from 'clsx'
import PropTypes from 'prop-types'

export function Button({ outline, className, ...rest }) {
  return (
    <button
      className={clsx(
        {
          btn: true,
          'btn-default': !outline,
          'btn-outline': outline,
        },
        className,
      )}
      {...rest}
    />
  )
}
Button.propTypes = {
  outline: PropTypes.bool,
  className: PropTypes.string,
}
