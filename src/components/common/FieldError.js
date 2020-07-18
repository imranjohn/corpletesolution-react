import React from 'react';

const FieldError = (props) => {
    return (
        <p id="" className="text-danger">
            {props.message}
        </p>
    );
};

export default FieldError;