import React from 'react';
import PropTypes from 'prop-types';

const OctagonFill = (props) => {
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
      <path d="M11.107 0a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146A.5.5 0 014.893 0h6.214z" />
    </svg>
  );
};

OctagonFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

OctagonFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default OctagonFill;
