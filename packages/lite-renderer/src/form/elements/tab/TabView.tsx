import { TabElement } from "./TabElement";
import * as React from "react";
import { TabElements, TabTitles, CurrentTab } from "./TabElementAttributes";
import { Visibility } from "../base/BaseElement";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { MapToView } from "../ElementToViewMapper";

type Props = {
  element: TabElement;
  weight: number;
};

export default function TabView({ element, weight }: Props) {
  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [tabElements, setTabElements] = React.useState<TabElements>([]);
  const [tabTitles, setTabTitles] = React.useState<TabTitles>([]);
  const [currentTab, setCurrentTab] = React.useState<CurrentTab>(0);
  const [visibility, setVisibility] = React.useState<Visibility>("show");

  React.useEffect(() => {
    let tabElementsSub = element.tabElementsContainer.subscribe({ next: v => setTabElements(v) });
    let tabTitlesSub = element.tabTitlesContainer.subscribe({ next: v => setTabTitles(v) });
    let currentTabSub = element.currentTabContainer.subscribe({ next: v => setCurrentTab(v) });
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
    setCurrentTab(newValue);
  }

  function renderChildren() {
    return tabElements.map((v, i) => (
      <div style={i == currentTab ? element.showStyle : element.goneStyle} key={`${v.type}_${i}`}>
        <MapToView element={v} weight={0} />
      </div>
    ));
  }

  function renderChildrenTitle() {
    return tabTitles.map((v, i) => <Tab label={v} key={`tab_title_${i}`} />);
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
