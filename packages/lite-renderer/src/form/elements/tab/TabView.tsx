import {TabElement} from './TabElement';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import {Direction} from '../share/Direction';
import IElement from 'flmc-data-layer/FormController/IElement';
import {MapToView} from '../ElementToViewMapper';
import {VisibilityType} from "../../..";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
type Props = {
  element: TabElement
}

export default function TabView({element}: Props) {

  const [direction, setDirection] = React.useState(Direction.Column);
  const [children, setChildren] = React.useState<IElement[]>([]);
  const [childrenTitle, setChildrenTitle] = React.useState<String[]>([]);
  const [visibility, setVisibility] = React.useState('');
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  React.useEffect(() => {

    let dirSub = element.directionValue.subscribe({
      next: (v) => setDirection(v)
    });

    let childrenSub = element.childrenContainer.subscribe({
      next: (v) => setChildren(v)
    });
    let childrenTitleSub = element.childrenTitleContainer.subscribe({
      next: (v) => setChildrenTitle(v)
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
    return children.map((v, i) =><div style={i==value? element.showStyle : element.goneStyle}><MapToView element={v} key={`${v.type}_${i}`}/></div>);
  }
  function renderChildrenTitle() {
    return childrenTitle.map((v, i) => <Tab label={v} key={`${i}`}/>);
  }
  return (
    <div>
    <AppBar position="static" color="default">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {renderChildrenTitle()}
      </Tabs>
    </AppBar>
      {renderChildren()}
    </div>
    // <Box
    //   style={visibility == VisibilityType.Gone ? element.goneStyle : visibility == VisibilityType.Hidden ? element.hiddenStyle : element.showStyle}
    //   display="flex" flexDirection={direction == Direction.Column ? "column" : "row"}>
    //   {renderChildren()}
    // </Box>
  )

}
