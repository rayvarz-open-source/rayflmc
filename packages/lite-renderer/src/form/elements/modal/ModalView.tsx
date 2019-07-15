import { ModalElement } from './ModalElement';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import { Direction } from '../share/Direction';
import IElement from 'flmc-data-layer/src/FormController/IElement';
import { MapToView } from '../ElementToViewMapper';
import Modal from '@material-ui/core/Modal';

type Props = {
    element: ModalElement
}

export default function ModalView({ element }: Props) {

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
        return children.map((v, i) => <MapToView element={v} key={`${v.type}_${i}`} />);
    }

    return (
      <Modal open={true}>
        <Box display="flex" flexDirection={direction == Direction.Column ? "column" : "row"}>
            {renderChildren()}
        </Box>
      </Modal>
    )

}
