const Title = (props) => {
    return (
        <p id={props.id} className={'title ' + props.class} style={{color: props.color}}>{props.content}</p>
    )
}

export default Title;