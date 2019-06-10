import { ContainerElement } from './ContainerElement';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import { Direction } from './Direction';
import IElement from 'flmc-data-layer/src/FormController/IElement';
import { MapToView } from '../ElementToViewMapper';

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

        let childrenSub = element.childrenContainer.subscribe({
            next: (v) => setChildren(v)
        });

        return () => {
            dirSub.unsubscribe();
        }

    })

    function renderChildren() {
        return children.map(v => <MapToView element={v} />);
    }

    return (
        <Box display="flex" flexDirection={direction == Direction.Column ? "column" : "row"}>
            {renderChildren()}
        </Box>
    )

}
