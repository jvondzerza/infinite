const Title = (props) => {
    return (
        <h1 id={props.id} className={"title"} style={{color: props.color}}>{props.content}</h1>
    )
}

export default Title;