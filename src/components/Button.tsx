interface ButtonProps {
    onClick: () => void;
    color: string;
    text: string;
}

const Button = (props: ButtonProps) => {
    return (
        <button 
            onClick={props.onClick}
            style={{backgroundColor: props.color}}
            className='btn'
        >
            {props.text}
        </button>
    )
}


Button.defaultProps = {
    color: 'steelblue',
}

// propTypes 
// Not really needed in tsx

export default Button
