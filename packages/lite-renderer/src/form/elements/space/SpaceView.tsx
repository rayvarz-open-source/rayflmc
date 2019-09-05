
import * as React from 'react';
import { Visibility } from '../base/BaseElement';
import { SpaceElement } from './SpaceElement';
import { Height, Width } from './SpaceElementAttributes';

type Props = {
    element: SpaceElement,
    weight: number
}

export default function SpaceView({ element, weight }: Props) {

    //region generated
    /*******************************************/
    /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
    /*******************************************/
    const [width, setWidth] = React.useState<Width>(() => element.widthContainer.value);
    const [height, setHeight] = React.useState<Height>(() => element.heightContainer.value);
    const [visibility, setVisibility] = React.useState<Visibility>(() => element.elementVisibilityContainer.value);

    React.useEffect(() => {

        let widthSub = element.widthContainer.subscribe({ next: v => setWidth(v) });
        let heightSub = element.heightContainer.subscribe({ next: v => setHeight(v) });
        let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

        return () => {
            widthSub.unsubscribe();
            heightSub.unsubscribe();
            visibilitySub.unsubscribe();
        };
    }, []);
    /*******************************************/
    /* END OF GENERATED CODE                   */
    /*******************************************/
    //endregion

    return (
        <div
            style={
                {
                    ...element.getVisibilityStyle(visibility),
                    ...{
                        width: width,
                        height: height,
                    }
                }
            }
        > </div>
    );

}
