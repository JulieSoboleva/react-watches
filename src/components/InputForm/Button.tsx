import './Button.css';

interface IButton {
    text: string,
}

export default function Button(props: IButton) {
    return (
        <div className='button'>
            <button type='submit' className='btn'>
                {props.text}
            </button>
        </div>
    );
}