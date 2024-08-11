import './CustomInput.css';

interface IItem {
    inputName: string,
    inputLabel: string,
    inputType: string,
    placeholder: string,
}

export default function CustomInput(props: IItem) {
    const { inputName, inputLabel, inputType, placeholder } = props;
    return (
        <div className='customInput'>
            <label htmlFor={inputName} className='customInput__label'>
                {inputLabel}
            </label>
            <input
                className='customInput__text'
                id={inputName}
                name={inputName}
                type={inputType}
                placeholder={placeholder}
            />
        </div>
    );
}