import Watch from './Watch';

export interface IWatch {
    id: string,
    name: string,
    timeZone: number,
}

interface IWatchesField {
    watch: IWatch[],
    onClickHandler: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
}

export default function WatchesField(props: IWatchesField) {
    const { watch, onClickHandler } = props;
    return (
        <ul className='watchesField'>
            {watch.map((item) => (
                <Watch
                    key={item.id}
                    watch={item}
                    onClickHandler={onClickHandler}
                />
            ))}
        </ul>
    );
}