import React from 'react';
import PropTypes from 'prop-types';

const EnvelopeOpen = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M.243 6.929l.514-.858L8 10.417l7.243-4.346.514.858L8 11.583.243 6.93z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7.184 10.68L.752 14.432l-.504-.864L6.68 9.816l.504.864zm1.632 0l6.432 3.752.504-.864L9.32 9.816l-.504.864z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8.47 1.318a1 1 0 00-.94 0l-6 3.2A1 1 0 001 5.4V14a1 1 0 001 1h12a1 1 0 001-1V5.4a1 1 0 00-.53-.882l-6-3.2zM7.06.435a2 2 0 011.882 0l6 3.2A2 2 0 0116 5.4V14a2 2 0 01-2 2H2a2 2 0 01-2-2V5.4a2 2 0 011.059-1.765l6-3.2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

EnvelopeOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EnvelopeOpen.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EnvelopeOpen;
