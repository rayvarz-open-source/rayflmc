import { AppBar, Tab, Tabs } from "@material-ui/core";
import * as React from "react";
import { MapToView } from "../ElementToViewMapper";
import { TabElement } from "./TabElement";

type Props = {
  element: TabElement;
  weight: number;
};

export default function TabView({ element, weight }: Props) {
  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [tabElements, setTabElements] = React.useState(
    () => element.tabElementsContainer.value
  );
  const [tabTitles, setTabTitles] = React.useState(
    () => element.tabTitlesContainer.value
  );
  const [currentTab, setCurrentTab] = React.useState(
    () => element.currentTabContainer.value
  );
  const [nativeProps, setNativeProps] = React.useState(
    () => element.nativePropsContainer.value
  );
  const [visibility, setVisibility] = React.useState(
    () => element.elementVisibilityContainer.value
  );

  React.useEffect(() => {
    const tabElementsSub = element.tabElementsContainer.subscribe({
      next: v => setTabElements(v)
    });
    const tabTitlesSub = element.tabTitlesContainer.subscribe({
      next: v => setTabTitles(v)
    });
    const currentTabSub = element.currentTabContainer.subscribe({
      next: v => setCurrentTab(v)
    });
    const nativePropsSub = element.nativePropsContainer.subscribe({
      next: v => setNativeProps(v)
    });
    const visibilitySub = element.elementVisibilityContainer.subscribe({
      next: v => setVisibility(v)
    });

    return () => {
      tabElementsSub.unsubscribe();
      tabTitlesSub.unsubscribe();
      currentTabSub.unsubscribe();
      nativePropsSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, [
    element.currentTabContainer,
    element.elementVisibilityContainer,
    element.tabElementsContainer,
    element.tabTitlesContainer,
    element.nativePropsContainer
  ]);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  function handleChange(_event: any, newValue: number) {
    element.currentTabContainer.next(newValue);
  }

  function renderChildren() {
    return tabElements.map((v, i) => (
      <React.Fragment key={`${v.type}_${i}`}>
        {currentTab === i && <MapToView element={v} weight={0} />}
      </React.Fragment>
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
      {...nativeProps}
      style={{
        ...element.getVisibilityStyle(visibility),
        ...element.getWeightStyle(weight),
        ...(nativeProps.style ? nativeProps.style : {})
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
