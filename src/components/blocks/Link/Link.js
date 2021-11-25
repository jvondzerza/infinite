const Link = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer">{props.test}</a>
    )
}

export default Link;