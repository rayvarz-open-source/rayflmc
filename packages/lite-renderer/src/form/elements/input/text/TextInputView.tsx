import { TextInputElement } from './TextInputElement';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

type Props = {
    element: TextInputElement
}

export default function TextInputView({ element }: Props) {

    const [value, setValue] = React.useState("");
    const [title, setTitle] = React.useState("");

    React.useEffect(() => {

        let valueSub = element.value.subscribe({
            next: (v) => setValue(v)
        });

        let titleSub = element.titleValue.subscribe({
            next: (v) => setTitle(v)
        });

        return () => {
            valueSub.unsubscribe();
            titleSub.unsubscribe();
        }

    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value == value) return;
        element.value.next(event.target.value);
    }

    return (
        <TextField
            label={title}
            value={value}
            onChange={handleChange}
            margin="normal"
        />
    )

}
