import { ContainerElement } from './ContainerElement';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import { Direction } from './Direction';
import IElement from 'flmc-data-layer/src/FormController/IElement';

type Props = {
    element: ContainerElement
}

export default function ContainerView({ element }: Props) {

    const [direction, setDirection] = React.useState(Direction.Column);
    const [children, setChildren] = React.useState<IElement[]>([]);

    React.useEffect(() => {

        let dirSub = element.directionValue.subscribe({
            next: (v) => setDirection(v)
        });


        return () => {
            dirSub.unsubscribe();
        }

    })


    return (
        <Box display="flex" flexDirection={direction == Direction.Column ? "column" : "row"}>
            { /* TODO: render children */}
        </Box>
    )

}
