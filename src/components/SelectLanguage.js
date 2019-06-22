import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import DropdownButton from './DropdownButton'

const SelectLanguage = (props) => {
  return (
      <DropdownButton
        title='Language'
        links={ props.langs }
      />
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
