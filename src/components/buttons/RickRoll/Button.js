function linkTo(url = 'https://en.wikipedia.org/wiki/Rickrolling') {
    window.open(url, '_blank');
}

const Button = (props) => {
    return (
        <button className={'button'} id={props.id} onClick={() => linkTo()}>
            Click me
        </button>
    )
}

export default Button