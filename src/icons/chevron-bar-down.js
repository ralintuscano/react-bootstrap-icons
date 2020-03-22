import React from 'react';
import PropTypes from 'prop-types';

const ChevronBarDown = (props) => {
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
        d="M3.646 4.146a.5.5 0 01.708 0L8 7.793l3.646-3.647a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708zM1 11.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ChevronBarDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronBarDown.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ChevronBarDown;
