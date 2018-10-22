import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../generic';

const CheckBox = ({
  checked, disabled, label, style, onClick, ...props
}) => {
  const clickHandler = () => {
    if (!disabled && typeof onClick === 'function') {
      onClick();
    }
  };

  // Format label
  const checkBoxLabel = {
    text: typeof label === 'string' ? label : label.text,
    size: typeof label === 'string' ? props.size : label.size || 1,
    color: typeof label === 'string' ? null : label.color,
  };

  // Adjust opacity if the checkbox is disabled
  let opacity = style && style.opacity ? style.opacity : 1;
  if (disabled) {
    opacity -= 0.5;
    opacity = Math.max(opacity, 0.1);
  }

  // Props to pass to the icons
  const iconProps = {
    ...props,
    style: {
      opacity,
      ...style,
    },
  };

  // Create the check box component
  return (
    <span onClick={clickHandler} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'default' }}>
      { checked && <Icon type="MaterialDesign" icon="MdCheckBox" {...iconProps} /> }
      { !checked && <Icon type="MaterialDesign" icon="MdCheckBoxOutlineBlank" {...iconProps} /> }
      { checkBoxLabel.text && <span style={{
        marginLeft: '5px', fontSize: `${checkBoxLabel.size}em`, opacity, color: checkBoxLabel.color,
      }}>{ checkBoxLabel.text }</span> }
    </span>
  );
};

// Define prop types
CheckBox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  /** size (in em) of the check box */
  size: PropTypes.number,
  /** label to display next to the checkbox */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  /** color of the check box */
  color: PropTypes.string,
  /** callback function to run when checkbox is clicked */
  onClick: PropTypes.func,
};

// Set default props
CheckBox.defaultProps = {
  checked: false,
  disabled: false,
  size: 1,
  label: {},
  onClick: () => {},
};

export default CheckBox;
