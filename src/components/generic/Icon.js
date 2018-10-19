import React from 'react';
import { IconContext } from "react-icons";
import * as FA from 'react-icons/fa';
import * as MD from 'react-icons/md';
import * as Ion from 'react-icons/io';
import * as Typicons from 'react-icons/ti'
import * as GO from 'react-icons/go';
import * as Feather from 'react-icons/fi';

class Icon extends React.Component {

  render() {
    const { type, icon, ...props } = this.props;
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

    const Icon = IconSet[icon];

    if (Icon) {
      return (
        <IconContext.Provider value={props}>
          <Icon />
        </IconContext.Provider>
      );
    }

    return null;
  }
}

// Set default props
Icon.defaultProps = {
  type: 'fontawesome',
};

export default Icon;