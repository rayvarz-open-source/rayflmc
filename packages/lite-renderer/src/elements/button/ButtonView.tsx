import { ButtonElement } from './ButtonElement';
import Button from '@material-ui/core/Button';
import * as React from 'react';

type Props = {
    element: ButtonElement
}

export default function ButtonView({ element }: Props) {

    const [onClick, setOnClick] = React.useState<VoidFunction>(() => { });
    const [title, setTitle] = React.useState("");

    element.buttonCallback.subscribe({
        next: (v) => setOnClick(v == null ? () => { } : v)
    });

    element.buttonText.subscribe({
        next: (v) => setTitle(v)
    });


    return (
        <Button variant="contained" onClick={() => onClick()}>
            {title}
        </Button>
    )

}
