import React from 'react';
import PropTypes from 'prop-types';
import  { Icon } from '../generic';

const CheckBox = ({ checked, disabled, ...props }) => {
  return checked
    ? <Icon type="MaterialDesign" icon="MdCheckBox" {...props} />
    : <Icon type="MaterialDesign" icon="MdCheckBoxOutlineBlank" {...props} />;
};

export default CheckBox;