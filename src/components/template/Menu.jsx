import React from "react";
import { Link } from 'react-router-dom'
export default props =>
    <Link to={props.param}>
        <i className={`fa fa-${props.icon}`}> {props.title}</i>
    </Link>