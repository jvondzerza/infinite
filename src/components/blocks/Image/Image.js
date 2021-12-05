import React from 'react';

const Image = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={"img"}>
            <img ref={props.refference} src={props.url} alt={props.description} className={props.className} id={props.id}/>
            <figcaption>Image by {props.credit} on <a href={props.creditUrl}>Unsplash</a></figcaption>
        </div>
    )
})

export default Image;