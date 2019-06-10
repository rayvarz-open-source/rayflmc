import { LabelElement } from './LabelElement';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

type Props = {
    element: LabelElement
}

export default function LabelView({ element }: Props) {

    const [text, setText] = React.useState("");

    React.useEffect(() => {

        let callbackSub = element.value.subscribe({
            next: (v) => setText(v)
        });

        return () => {
            callbackSub.unsubscribe();
        }

    })

    return (
        <Typography variant="body1">
            {text}
        </Typography>
    )

}
