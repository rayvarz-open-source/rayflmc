
import { SpaceElement } from './SpaceElement';
import * as React from 'react';
import { Width, Height } from './SpaceElementAttributes';
import { Visibility } from '../base/BaseElement';

type Props = {
    element: SpaceElement,
    weight: number
}

export default function SpaceView({ element, weight }: Props) {

    //region generated
    /*******************************************/
    /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
    /*******************************************/
    const [width, setWidth] = React.useState<Width>(0);
    const [height, setHeight] = React.useState<Height>(0);
    const [visibility, setVisibility] = React.useState<Visibility>('show');

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
