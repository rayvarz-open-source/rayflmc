import {ContainerElement} from './ContainerElement';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import {Direction} from '../share/Direction';
import IElement from 'flmc-data-layer/FormController/IElement';
import {MapToView} from '../ElementToViewMapper';
import {VisibilityType} from "../../..";

type Props = {
  element: ContainerElement
}

export default function ContainerView({element}: Props) {

  const [direction, setDirection] = React.useState(Direction.Column);
  const [children, setChildren] = React.useState<IElement[]>([]);
  const [visibility, setVisibility] = React.useState('');

  React.useEffect(() => {

    let dirSub = element.directionValue.subscribe({
      next: (v) => setDirection(v)
    });

    let childrenSub = element.childrenContainer.subscribe({
      next: (v) => setChildren(v)
    });
    let visibilitySub = element.elementVisibility.subscribe({
      next: (v) => setVisibility(v)
    });
    return () => {
      dirSub.unsubscribe();
      visibilitySub.unsubscribe();
    }

  })

  function renderChildren() {
    return children.map((v, i) => <MapToView element={v} key={`${v.type}_${i}`}/>);
  }

  return (
    <Box
      style={visibility == VisibilityType.Gone ? element.goneStyle : visibility == VisibilityType.Hidden ? element.hiddenStyle : element.showStyle}
      display="flex" flexDirection={direction == Direction.Column ? "column" : "row"}>
      {renderChildren()}
    </Box>
  )

}
