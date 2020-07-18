import React from "react";

const FormInput = (props) => {
    return (
        <React.Fragment>
            <input type={props.type} className={props.className} placeholder={props.placeholder} name={props.name} />

        </React.Fragment>
    );
}

export default FormInput