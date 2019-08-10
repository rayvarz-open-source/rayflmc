# How to create a custom mapper

a mapper is a function that takes element and weight and returns a react element or null.

element mapper in core is something like this :

```typescript
export function MapToView({ element, weight }: MapperProps) {
  const customMappers = React.useContext(CustomElementContext);

  for (let mapper of customMappers) {
    let view = mapper({ element, weight });
    if (view != null) return view;
  }

  switch (element.type) {
    case ElementType.Button:
      return <ButtonView element={element as ButtonElement} weight={weight} />;
    case ElementType.Modal:
      return <ModalView element={element as ModalElement} weight={weight} />;
    case ElementType.SelectBox:
      return <SelectView element={element as SelectBoxElement<any>} weight={weight} />;
    case ElementType.Label:
      return <LabelView element={element as LabelElement} weight={weight} />;
    case ElementType.Container:
      return <ContainerView element={element as ContainerElement} weight={weight} />;
    case ElementType.Tab:
      return <TabView element={element as TabElement} weight={weight} />;
    case ElementType.Chip:
      return <ChipView element={element as ChipElement} weight={weight} />;
    case ElementType.TextInput:
      return <TextInputView element={element as TextInputElement} weight={weight} />;
    case ElementType.Grid:
      return <GridView element={element as GridElement} weight={weight} />;
    case ElementType.Image:
      return <ImageView element={element as ImageElement} weight={weight} />;
    case ElementType.Space:
      return <SpaceView element={element as SpaceElement} weight={weight} />;
    case ElementType.Raw:
      return <RawView element={element as RawElement} weight={weight} />;
  }
  throw Error(`can't map ${element.type} to a view`);
}
```

every element has a property called type. type is a harcoded string that can be used inside mapper to create element's view, so it's useful to create an enum for it. core's types are saved inside `ElementType.ts` like this :

```typescript
export enum ElementType {
  // ...
  Button = "LiteRenderer:Button",
  Label = "LiteRenderer:Label"
  // ..
}
```

start by creating a file with name like `ElementType.ts` and create an enum with list of your element types:

```typescript
export enum ElementType {
  AmazingButton = "AmazingElements:AmazingButton"
}
```

> it's better to prefix your types with a prefix to avoid conflict.

then create your element and your element view:

AmazaingButtonElement.ts:

```typescript
export class AmazaingButtonElement extends BaseElement implements IElement {
  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  dispose(): void {}

  get type(): string {
    return ElementType.AmazingButton; // use your type here
  }
}

const AmazaingButton = (): AmazaingButtonElement => {
  return new AmazaingButtonElement();
};

export default AmazaingButton;
```

AmazingButtonView.tsx:

```typescript
type Props = {
  element: AmazingButtonElement; // your element type
  weight: number;
};

export default function AmazingButtonView({ element, weight }: Props) {
  return {
    /* your view... */
  };
}
```

now you can create the mapper:

CustomMapper.ts

```typescript
export function customMapper({ element, weight }: MapperProps) {
  switch (element.type) {
    case ElementType.AmazingButton:
      return <AmazingButtonView element={element as AmazingButtonEkenebt} weight={weight} />;
  }
  return null;
}
```

and you are done!

now you can register your custom element and use it in your forms:

```typescript

<FLMC
    ...
    customElementMappers={
            [
              customMapper
            ]
          }
/>

```

## Override core element's view ( or other packages )

as you can see above customMappers runs first from top to the button then core runs.

so you can use type name in core package ( or other packages ) and replace their default views:

```typescript
export function overrideCoreButtonElement({ element, weight }: MapperProps) {
  switch (element.type) {
    case ElementType.Button: // ElementType from core pacakge
      return <p>{"I am not a button !"}</p>;
  }
  return null;
}
```

now all your buttons are `<p>` elements.
