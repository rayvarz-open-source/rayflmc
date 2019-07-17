import {ChipElement} from './ChipElement';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import {Direction} from '../share/Direction';
import index, {ChipSelectionType, VisibilityType} from "../../..";
import {ChipModel} from "./ChipModel";
import Chip from '@material-ui/core/Chip';
import SelectIcon from '@material-ui/icons/DoneRounded';
import DeleteIcon from '@material-ui/icons/CloseRounded';

type Props = {
  element: ChipElement
}

export default function ChipView({element}: Props) {

  const [direction, setDirection] = React.useState(Direction.Column);
  const [children, setChildren] = React.useState<ChipModel[]>([]);
  const [selectionType, setSelectionType] = React.useState<string>();
  const [visibility, setVisibility] = React.useState('');
  const handleDelete = chipToDelete => () => {
    if (selectionType==ChipSelectionType.Show) {
      return;
    }
    let list = [...children];

      list.map((item,index)=>
      {
        let temp:ChipModel=item;
        switch (selectionType) {
          case ChipSelectionType.MultiSelect:
            if (item.id===chipToDelete.id)
            {
              temp.isSelected=!chipToDelete.isSelected;
            }
            break
          case ChipSelectionType.Select:
            temp.isSelected=item.id===chipToDelete.id;
            break;
          case ChipSelectionType.Delete:
            if (item.id===chipToDelete.id)
            {
              temp.isSelected=true;
            }
            break;
        }
        return temp});
    //new value
    setChildren(list);
  }
  React.useEffect(() => {

    let dirSub = element.directionValue.subscribe({
      next: (v) => setDirection(v)
    });

    let childrenSub = element.childrenContainer.subscribe({
      next: (v) => setChildren(v)
    });
    let selectionTypeSub = element.selectionType.subscribe({
      next: (v) => setSelectionType(v)
    });
    let visibilitySub = element.elementVisibility.subscribe({
      next: (v) => setVisibility(v)
    });
    return () => {
      childrenSub.unsubscribe();
      dirSub.unsubscribe();
      visibilitySub.unsubscribe();
      selectionTypeSub.unsubscribe();
    }

  })
  return (
    <div style={visibility == VisibilityType.Gone ? element.goneStyle : visibility == VisibilityType.Hidden ? element.hiddenStyle : element.showStyle} style={{direction:'rtl'}}>
      {children.filter(item=>selectionType==ChipSelectionType.Delete?!item.isSelected:item).map((data) => {


        return (
          <Chip
            key={data.id}
            style={{direction:'ltr'}}
            label={data.title}
            deleteIcon={selectionType==ChipSelectionType.Delete?<DeleteIcon/>:((selectionType==ChipSelectionType.Select ||selectionType==ChipSelectionType.MultiSelect)&& data.isSelected)?<SelectIcon/>:<p></p>}
            onDelete={handleDelete(data)}
            onClick={selectionType==ChipSelectionType.Delete?()=>{}:handleDelete(data)}
          />
        );
      })}
    </div>
    // <Box
    //   style={visibility == VisibilityType.Gone ? element.goneStyle : visibility == VisibilityType.Hidden ? element.hiddenStyle : element.showStyle}
    //   display="flex" flexDirection={direction == Direction.Column ? "column" : "row"}>
    //   {renderChildren()}
    // </Box>
  )

}
