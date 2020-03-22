import React from 'react';
import PropTypes from 'prop-types';

const Arrow90degRight = (props) => {
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
        d="M9.896 2.396a.5.5 0 000 .708l2.647 2.646-2.647 2.646a.5.5 0 10.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M13.25 5.75a.5.5 0 00-.5-.5h-6.5a2.5 2.5 0 00-2.5 2.5v5.5a.5.5 0 001 0v-5.5a1.5 1.5 0 011.5-1.5h6.5a.5.5 0 00.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Arrow90degRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Arrow90degRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Arrow90degRight;
