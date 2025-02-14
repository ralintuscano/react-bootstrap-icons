import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SymmetryVertical = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5v-11zm2.376-.484a.5.5 0 0 1 .563.245l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.484zM10 4.46V13h4.658L10 4.46z" />
    </svg>
  );
});

SymmetryVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SymmetryVertical.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SymmetryVertical;
