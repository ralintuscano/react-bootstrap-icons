import React from 'react';
import PropTypes from 'prop-types';

const EnvelopeFill = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M.05 3.555L8 8.414l7.95-4.859A2 2 0 0014 2H2A2 2 0 00.05 3.555zM16 4.697l-5.875 3.59L16 11.743V4.697zm-.168 8.108L9.157 8.879 8 9.586l-1.157-.707-6.675 3.926A2 2 0 002 14h12a2 2 0 001.832-1.195zM0 11.743l5.875-3.456L0 4.697v7.046z" />
    </svg>
  );
};

EnvelopeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EnvelopeFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EnvelopeFill;
