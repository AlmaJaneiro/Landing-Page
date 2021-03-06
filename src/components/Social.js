import React from 'react';

const Social = ({clase, link}) => {
    return (
        <li><a className="mail" target="_blank" href={`${link}`} rel="noopener noreferrer"><i className={`fa fa-${clase}`}></i></a></li>
    );
};

export default Social;