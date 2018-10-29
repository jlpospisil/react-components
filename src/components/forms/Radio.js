import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../generic';

const Radio = ({
  options, selected, disabled, inline, onClick, style, ...props
}) => {
  const clickHandler = (option) => {
    if (!disabled && typeof onClick === 'function') {
      onClick(option);
    }
  };

  // Adjust opacity if the radio is disabled
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

  const itemStyle = {
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    cursor: 'default',
    marginLeft: inline ? '1em' : 0
  };

  // Create the check box component
  return (
    <span style={{display: 'inline-block'}}>
      {
        options.map((option, optionIndex) => {
          const label = {
            text: typeof option === 'string' ? option : option.text,
            size: typeof option === 'string' ? props.size : option.size,
            color: typeof option === 'string' ? null : option.color,
          };

          return (
            <span style={itemStyle} key={optionIndex} onClick={() => clickHandler(option)}>
              <Icon type="MaterialDesign" icon={selected === option ? 'MdRadioButtonChecked' : 'MdRadioButtonUnchecked'} {...iconProps} />
              { label.text && <span style={{ marginLeft: '5px', fontSize: `${label.size}em`, opacity, color: label.color }}>
                { label.text }
              </span> }
            </span>
          );
        })
      }
    </span>
  );
};

// Define prop types
Radio.propTypes = {
  /** radio choices */
  options: PropTypes.array,
  /** currently selected option */
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  /** display the options inline instead of stacked */
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  /** size (in em) of the check box */
  size: PropTypes.number,
  /** callback function to run when checkbox is clicked */
  onClick: PropTypes.func,
};

// Set default props
Radio.defaultProps = {
  disabled: false,
  inline: false,
  size: 1.5,
  onClick: () => {},
};

export default Radio;
