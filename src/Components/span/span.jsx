import React from 'react';

const Span = (props) => {
    return (
        <span className={`iconType type-${props.type}`}>{props.type}</span>
    );
}
export default Span;