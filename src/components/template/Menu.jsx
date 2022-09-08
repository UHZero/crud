import React from "react";

export default props =>
    <a href={props.dest}>
        <i className={`fa fa-${props.icon}`}> {props.title}</i>
    </a>