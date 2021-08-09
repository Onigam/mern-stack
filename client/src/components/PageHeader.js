import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo.svg';

const PageHeader = ({ headerText }) => {
    return (
        <div className="col-12 d-flex align-items-center">
            <img className="mx-3" src={Logo} alt="Logo" style={{ height: '72px' }} />
            <h1 className="mt-4">
                {headerText}
            </h1>
        </div>
    )
}

PageHeader.propTypes = {
    headerText: PropTypes.string.isRequired
};

export default PageHeader;