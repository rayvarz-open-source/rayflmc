import { Chip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/CloseRounded';
import SelectIcon from '@material-ui/icons/DoneRounded';
import * as React from 'react';
import { Visibility } from '../base/BaseElement';
import { ChipElement } from './ChipElement';
import { SelectionType, Value } from './ChipElementAttributes';
import { ChipModel } from './ChipModel';
import { ChipSelectionType } from './ChipSelectionType';

type Props = {
  element: ChipElement,
  weight: number
}

export default function ChipView({ element, weight }: Props) {

  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [value, setValue] = React.useState<Value>(() => element.valueContainer.value);
  const [selectionType, setSelectionType] = React.useState<SelectionType>(() => element.selectionTypeContainer.value);
  const [visibility, setVisibility] = React.useState<Visibility>(() => element.elementVisibilityContainer.value);

  React.useEffect(() => {

    let valueSub = element.valueContainer.subscribe({ next: v => setValue(v) });
    let selectionTypeSub = element.selectionTypeContainer.subscribe({ next: v => setSelectionType(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      valueSub.unsubscribe();
      selectionTypeSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  const handleDelete = (chipToDelete: ChipModel) => () => {
    if (selectionType == ChipSelectionType.Show) return;
    if (value == null) return;

    let newValue = value.map(item => {
      let newItem: ChipModel = item;
      switch (selectionType) {
        case ChipSelectionType.MultiSelect:
          if (item.id === chipToDelete.id) {
            newItem.isSelected = !chipToDelete.isSelected;
          }
          break
        case ChipSelectionType.Select:
          newItem.isSelected = item.id === chipToDelete.id;
          break;
        case ChipSelectionType.Delete:
          if (item.id === chipToDelete.id) {
            newItem.isSelected = true;
          }
          break;
      }
      return newItem;
    });
    element.valueContainer.next(newValue);
  }

  function createChildren(): React.ReactElement[] {
    if (value == null) return [];
    return value.filter(item => selectionType == ChipSelectionType.Delete ? !item.isSelected : item).map((data) => {
      return (
        <Chip
          key={data.id}
          style={{ direction: 'ltr' }}
          label={data.title}
          deleteIcon={
            selectionType == ChipSelectionType.Delete ?
              <DeleteIcon /> :
              ((selectionType == ChipSelectionType.Select || selectionType == ChipSelectionType.MultiSelect) && data.isSelected) ?
                <SelectIcon /> : undefined
          }
          onDelete={handleDelete(data)}
          onClick={selectionType == ChipSelectionType.Delete ? () => { } : handleDelete(data)}
        />
      );
    })
  }

  return (
    <div style={
      {
        ...element.getVisibilityStyle(visibility),
        ...element.getWeightStyle(weight),
      }
    }> {createChildren()}</div>
  )

}
