import React from 'react';
import PropTypes from 'prop-types';
import  { Icon } from '../generic';

const CheckBox = ({ checked, disabled, style, onClick, ...props }) => {
  const clickHandler = () => {
    if (!disabled && typeof onClick === 'function') {
      onClick();
    }
  };

  // Adjust opacity if the checkbox is disabled
  let opacity = style && style.opacity ? style.opacity : 1;
  if (disabled) {
    opacity -= 0.5;
    opacity = Math.max(opacity, 0.1);
  }

  const iconProps = {
    ...props,
    style: {
      ...style,
      opacity
    }
  };

  return (
    <span onClick={clickHandler}>
      { checked && <Icon type="MaterialDesign" icon="MdCheckBox" {...iconProps} /> }
      { !checked && <Icon type="MaterialDesign" icon="MdCheckBoxOutlineBlank" {...iconProps} /> }
    </span>
  );
};

// Define prop types
CheckBox.propTypes = {
  onClick: PropTypes.func
};

// Set default props
CheckBox.defaultProps = {
  onClick: () => {}
};

export default CheckBox;