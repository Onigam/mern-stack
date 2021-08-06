import React from 'react';

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

export default PageHeader;