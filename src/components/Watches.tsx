import { useState } from 'react';
import generateID from './InputForm/helpers/generateID';
import InputForm, { IInputField } from './InputForm/InputForm';
import WatchesField from './WatchesField/WatchesField';

const WATCH_INITIAL_STATE = [
    {
        name: 'Уагадугу (GMT)',
        timeZone: 0,
        id: '1723393355533',
    },
    {
        name: 'Калининград (GMT+2)',
        timeZone: 2,
        id: '1723393355532',
    },
    {
        name: 'Москва (GMT+3)',
        timeZone: 3,
        id: '1723393355530',
    },
    {
        name: 'Новосибирск (GMT+7)',
        timeZone: 7,
        id: '1723393355531',
    },
];

export default function Watches() {
    const [watch, setWatch] = useState(WATCH_INITIAL_STATE);

    const inputData: IInputField[] = [
        {
            inputName: 'name',
            inputLabel: 'Название',
            inputType: 'text',
            placeholder: 'Введите город',
            id: '1',
        },
        {
            inputName: 'timeZone',
            inputLabel: 'Временная зона',
            inputType: 'number',
            placeholder: 'GMT',
            id: '2',
        },
    ];

    const btnText = 'Добавить';

    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        const children = [...event.target.children];

        setWatch((prevWatch) => [
            ...prevWatch,
            {
                name: children[0].children[1].value,
                timeZone: children[1].children[1].value,
                id: generateID(),
            },
        ]);
    };

    const onClickHandler = (event: any) => {
        const removeId = event.target.dataset.id;
        const newWatch = watch.filter((el) => el.id !== removeId);
        setWatch(newWatch);
    };

    return (
        <div className='watches'>
            <InputForm
                inputData={inputData}
                btnText={btnText}
                onSubmitHandler={onSubmitHandler}
            />
            <WatchesField 
                watch={watch} 
                onClickHandler={onClickHandler} 
            />
        </div>
    );
}