import React from 'react';

const Span = ({ type, classes }) => {
    return (
        <span className={`iconType type-${type} ${classes}`}>{type}</span>
    );
}
export default Span;