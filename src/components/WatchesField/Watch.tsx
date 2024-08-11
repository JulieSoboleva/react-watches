import { useEffect, useState } from 'react';
import { IWatch } from './WatchesField';
import initLocalClock from './helpers/initLocalClock';
import './Watch.css';

interface IWatchWithHandler {
    watch: IWatch,
    onClickHandler: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
}

export default function Watch({ watch, onClickHandler }: IWatchWithHandler) {
    const [time, setTime] = useState(initLocalClock(+watch.timeZone));

    useEffect(() => {
        const timerID = setTimeout(() => {
            setTime(initLocalClock(+watch.timeZone));
        }, 1000);

        return () => {
            clearTimeout(timerID);
        };
    });

    return (
        <li className='watch'>
            <span className='watch_delete' onClick={onClickHandler} data-id={watch.id}>
                &#x2715;
            </span>
            <span className='watch_name'>{watch.name}</span>
            <div className='hours-container'>
                <div
                    className='hours'
                    style={{
                        transform: `rotateZ(${time.hours}deg)`,
                        WebkitTransform: `rotateZ(${time.hours}deg)`,
                    }}
                ></div>
            </div>
            <div className='minutes-container'>
                <div
                    className='minutes'
                    style={{
                        transform: `rotateZ(${time.minutes}deg)`,
                        WebkitTransform: `rotateZ(${time.minutes}deg)`,
                    }}
                ></div>
            </div>
            <div className='seconds-container'>
                <div
                    className='seconds'
                    style={{
                        transform: `rotateZ(${time.seconds}deg)`,
                        WebkitTransform: `rotateZ(${time.seconds}deg)`,
                    }}
                ></div>
            </div>
        </li>
    );
}
