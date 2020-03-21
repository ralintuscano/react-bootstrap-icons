import React from 'react';
import PropTypes from 'prop-types';

const GraphDown = (props) => {
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
      <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z" />
      <path
        fillRule="evenodd"
        d="M14.39 9.041l-4.349-5.436L7 6.646 3.354 3l-.708.707L7 8.061l2.959-2.959 3.65 4.564.781-.625z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 9.854a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-1 0v3.5h-3.5a.5.5 0 00-.5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

GraphDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GraphDown.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default GraphDown;
