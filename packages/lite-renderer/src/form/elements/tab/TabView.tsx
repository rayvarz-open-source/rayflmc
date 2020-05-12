import { AppBar, Tab, Tabs } from "@material-ui/core";
import * as React from "react";
import { Visibility } from "../base/BaseElement";
import { MapToView } from "../ElementToViewMapper";
import { TabElement } from "./TabElement";
import { CurrentTab, TabElements, TabTitles } from "./TabElementAttributes";

type Props = {
  element: TabElement;
  weight: number;
};

export default function TabView({ element, weight }: Props) {
  const _doUpdateViewIfTabChanged = React.useRef(true);
  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [tabElements, setTabElements] = React.useState<TabElements>(() => element.tabElementsContainer.value);
  const [tabTitles, setTabTitles] = React.useState<TabTitles>(() => element.tabTitlesContainer.value);
  const [currentTab, setCurrentTab] = React.useState<CurrentTab>(() => element.currentTabContainer.value);
  const [visibility, setVisibility] = React.useState<Visibility>(() => element.elementVisibilityContainer.value);

  React.useEffect(() => {
    let tabElementsSub = element.tabElementsContainer.subscribe({ next: v => setTabElements(v) });
    let tabTitlesSub = element.tabTitlesContainer.subscribe({ next: v => setTabTitles(v) });
    let currentTabSub = element.currentTabContainer.subscribe({ next: v => {
      if (_doUpdateViewIfTabChanged.current) {
        setCurrentTab(v);
      } else {
        _doUpdateViewIfTabChanged.current = true;
      }
    } });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      tabElementsSub.unsubscribe();
      tabTitlesSub.unsubscribe();
      currentTabSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  function handleChange(event: any, newValue: number) {
    _doUpdateViewIfTabChanged.current = false;
    element.currentTabContainer.next(newValue);
  }

  function renderChildren() {
    return tabElements.map((v, i) => (
      <div style={i == currentTab ? element.showStyle : element.goneStyle} key={`${v.type}_${i}`}>
        <MapToView element={v} weight={0} />
      </div>
    ));
  }

  function renderChildrenTitle() {
    return tabTitles.map((v, i) => {
      let label = "";
      let disabled = false;
      if (typeof v === "string") label = v;
      else [label, disabled] = v;

      return <Tab label={label} disabled={disabled} key={`tab_title_${i}`} />;
    });
  }

  return (
    <div
      style={{
        ...element.getVisibilityStyle(visibility),
        ...element.getWeightStyle(weight)
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={currentTab}
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
  );
}
