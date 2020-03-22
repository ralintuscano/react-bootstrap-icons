import React from 'react';
import PropTypes from 'prop-types';

const BucketFill = (props) => {
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
        d="M8 1.5A4.5 4.5 0 003.5 6h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 008 1.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M1.61 5.687A.5.5 0 012 5.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H4.802a1.5 1.5 0 01-1.464-1.175L1.512 6.108a.5.5 0 01.098-.42z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BucketFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BucketFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BucketFill;
