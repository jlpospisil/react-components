import React from 'react';
import PropTypes from 'prop-types';
import { Stretch } from 'styled-loaders-react';

const Loader = ({ loading }) => (loading ? <Stretch /> : null);

Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
