import React from 'react';
import PropTypes from 'prop-types';

const ArrowsAngleExpand = (props) => {
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
        d="M1.5 10.036a.5.5 0 01.5.5v3.5h3.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6.354 9.646a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708l4.5-4.5a.5.5 0 01.708 0zm8.5-8.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708l4.5-4.5a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10.036 1.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 11-1 0V2h-3.5a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowsAngleExpand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowsAngleExpand.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowsAngleExpand;
