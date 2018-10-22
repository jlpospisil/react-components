import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import * as FA from 'react-icons/fa';
import * as MD from 'react-icons/md';
import * as Ion from 'react-icons/io';
import * as Typicons from 'react-icons/ti'
import * as GO from 'react-icons/go';
import * as Feather from 'react-icons/fi';

// Get the requested icon if it exists
const getIcon = ({ type, icon }) => {
  let IconSet = FA;

  switch (type.toLowerCase()) {
    case 'material-design':
    case 'materialdesign':
    case 'md':
      IconSet = MD;
      break;

    case 'ion':
    case 'ionicons':
      IconSet = Ion;
      break;

    case 'typicons':
      IconSet = Typicons;
      break;

    case 'go':
      IconSet = GO;
      break;

    case 'feather':
      IconSet = Feather;
      break;
  }

  return IconSet[icon];
};

// Create the react component
class Icon extends React.Component {

  render() {
    const { type, icon, size, ...props } = this.props;

    const Icon = getIcon({ type, icon });

    if (Icon) {
      return (
        <IconContext.Provider value={{ size: `${size}em`, ...props }}>
          <Icon />
        </IconContext.Provider>
      );
    }

    return null;
  }
}

// Define prop types
Icon.propTypes = {
  /** name of the icon suite */
  type: PropTypes.string,
  /** name of the icon (see notes for list) */
  icon: PropTypes.string,
  /** size (in em) of the icon */
  size: PropTypes.number,
  /** color of the icon */
  color: PropTypes.string,
};

// Set default props
Icon.defaultProps = {
  type: 'FontAwesome',
  size: 1
};

export default Icon;