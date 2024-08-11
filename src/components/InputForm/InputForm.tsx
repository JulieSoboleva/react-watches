import Button from './Button';
import CustomInput from './CustomInput';
import './InputForm.css';

export interface IInputField {
    inputName: string,
    inputLabel: string,
    inputType: string,
    placeholder: string,
    id: string,
}

interface IInputForm {
    inputData: IInputField[],
    btnText: string,
    onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void,
}

export default function InputForm(props: IInputForm) {
    const { inputData, btnText, onSubmitHandler } = props;
    return (
        <form className='inputField' onSubmit={onSubmitHandler}>
            {inputData.map((item) => (
                <CustomInput
                    key={item.id}
                    inputName={item.inputName}
                    inputLabel={item.inputLabel}
                    inputType={item.inputType}
                    placeholder={item.placeholder}
                />
            ))}
            <Button text={btnText}/>
        </form>
    );
}