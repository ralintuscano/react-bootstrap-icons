import React from 'react';
import PropTypes from 'prop-types';

const MicMute = (props) => {
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
        d="M12.734 9.613A4.995 4.995 0 0013 8V7a.5.5 0 00-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 014 8V7a.5.5 0 00-1 0v1a5 5 0 004.5 4.975V15h-3a.5.5 0 000 1h7a.5.5 0 000-1h-3v-2.025a4.973 4.973 0 002.43-.923l-.718-.719zM11 7.88V3a3 3 0 00-5.842-.963l.845.845A2 2 0 0110 3v3.879l1 1zM8.738 9.86l.748.748A3 3 0 015 8V6.121l1 1V8a2 2 0 002.738 1.86z"
        clipRule="evenodd"
      />
      <path stroke="#000" d="M2 1l12 12" />
    </svg>
  );
};

MicMute.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MicMute.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default MicMute;
