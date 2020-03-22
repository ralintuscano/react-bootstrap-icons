import React from 'react';
import PropTypes from 'prop-types';

const PhoneLandscape = (props) => {
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
        d="M1 4.5v6a1 1 0 001 1h12a1 1 0 001-1v-6a1 1 0 00-1-1H2a1 1 0 00-1 1zm-1 6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2H2a2 2 0 00-2 2v6z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M14 7.5a1 1 0 10-2 0 1 1 0 002 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

PhoneLandscape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhoneLandscape.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PhoneLandscape;
