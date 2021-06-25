import React from 'react';

import './ImageCard.css';

const ImageCard = (props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
};

export default ImageCard;