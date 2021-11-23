const Text = (props) => {
    return (
        <p className={'text'} id={props.id}>
            {props.text}
        </p>
    )
}

export default Text;