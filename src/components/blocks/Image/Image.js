const Image = (props) => {
    return (
        <div className={"img"}>
            <img src={props.url} alt={props.description} className={props.className} id={props.id}/>
            <figcaption>Image by {props.credit} on <a href={props.creditUrl}>Unsplash</a></figcaption>
        </div>
    )
}

export default Image;