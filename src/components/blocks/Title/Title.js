const Title = (props) => {
    return (
        <p id={props.id} className={'title ' + props.class} > {props.content}</p >
    )
}

export default Title;