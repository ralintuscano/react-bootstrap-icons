import React from 'react';
import PropTypes from 'prop-types';

const FunnelFill = (props) => {
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
      <path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z" />
      <path
        fillRule="evenodd"
        d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z"
        clipRule="evenodd"
      />
    </svg>
  );
};

FunnelFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FunnelFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FunnelFill;
