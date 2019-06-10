import { ButtonElement } from './ButtonElement';
import Button from '@material-ui/core/Button';
import * as React from 'react';

type Props = {
    element: ButtonElement
}

export default function ButtonView({ element }: Props) {

    const [onClick, setOnClick] = React.useState<VoidFunction>(() => { });
    const [title, setTitle] = React.useState("");

    React.useEffect(() => {

        let callbackSub = element.buttonCallback.subscribe({
            next: (v) => setOnClick(v == null ? () => { } : v)
        });
    
        let textSub = element.buttonText.subscribe({
            next: (v) => setTitle(v)
        });

        return () => {
            callbackSub.unsubscribe();
            textSub.unsubscribe();
        }

    })




    return (
        <Button variant="contained" onClick={() => onClick()}>
            {title}
        </Button>
    )

}
