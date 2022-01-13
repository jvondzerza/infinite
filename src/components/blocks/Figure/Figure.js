import React from 'react';

const Figure = React.forwardRef ((props, ref) => {
    const imageInfo = props.imageInfo;

    return (
        <figure ref={ref} className={`figure ${props.className}`}>
            <img
                id={imageInfo.id}
                src={imageInfo.url}
                alt={imageInfo.description}
                className={"img"}
            />
            <figcaption>Img by {imageInfo.credit} on <a href={imageInfo.link}>Unsplash</a></figcaption>
        </figure>
    )
});

Figure.displayName = Figure;

export default Figure