import {ContainerElement} from './ContainerElement';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import {Direction} from '../share/Direction';
import IElement from 'flmc-data-layer/FormController/IElement';
import {MapToView} from '../ElementToViewMapper';
import {VisibilityType} from "../../..";
import {ContainerModel} from "./ContainerModel";

type Props = {
  element: ContainerElement,
  weight:number

}

export default function ContainerView({element,weight}: Props) {

  const [direction, setDirection] = React.useState(Direction.Column);
  const [children, setChildren] = React.useState<IElement[]>([]);
  const [childrenWeighted, setChildrenWeighted] = React.useState<ContainerModel[]>([]);
  const [visibility, setVisibility] = React.useState('');

  React.useEffect(() => {

    let dirSub = element.directionValue.subscribe({
      next: (v) => setDirection(v)
    });

    let childrenSub ;
    if(element.childrenContainer)
    childrenSub= element.childrenContainer.subscribe({
      next: (v) => setChildren(v)
    });
    let childrenWeightedSub;
    if (element.childrenWeightedContainer)
    {
      childrenWeightedSub= element.childrenWeightedContainer.subscribe({
      next: (v) => setChildrenWeighted(v)
    });}
    let visibilitySub = element.elementVisibility.subscribe({
      next: (v) => setVisibility(v)
    });
    return () => {
      dirSub.unsubscribe();
      visibilitySub.unsubscribe();
    }

  })

  function renderChildren() {
    if (childrenWeighted && childrenWeighted.length>0)
      return childrenWeighted.map((v, i) => <MapToView element={v.element} weight={v.weight} key={`${v.element.type}_${i}`}/>);
    return children.map((v, i) => <MapToView element={v} weight={0} key={`${v.type}_${i}`}/>);
  }

  return (
    <Box
      style={visibility == VisibilityType.Gone ? element.goneStyle : visibility == VisibilityType.Hidden ? element.hiddenStyle : element.showStyle}
      style={{flexGrow:weight}}
      display="flex" flexDirection={direction} >
      {renderChildren()}
    </Box>
  )

}
