import React from 'react';
import {Link} from 'react-router-dom';

const country = (props) => {
    return (
        <div>
            <Link to = {`/details/${props.id}`}>
                <p>{props.flag} {props.name}</p>
            </Link>
        </div>
    )
}

export default country