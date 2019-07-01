import IElement, { ValidationResult } from 'flmc-data-layer/src/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';

export class GridElement implements IElement {
    dispose(): void { }

    get type(): string {
        return ElementType.GRID;
    }

    validate(): ValidationResult {
        // no need to validate Grid Element for now
        throw new ValidationResult(true, "");
    }

    // columnDefinitionContainer = new BehaviorSubject<ColumnDefinitions>([]);

    // private columnDefinitionR(definitions: ColumnDefinitions): GridElement {
    //     this.columnDefinitionContainer.next(definitions);
    //     return this;
    // }

    // private columnDefinitionO(definitions: Observable<IElement[]>): GridElement {
    //     definitions.subscribe({
    //         next: v => this.columnDefinitionContainer.next(v),
    //     });
    //     return this;
    // }

    // columnDefinition(definitions: Observable<IElement[]> | ColumnDefinitions): GridElement {
    //     if (isObservable(definitions)) this.columnDefinitionO(definitions);
    //     else this.columnDefinitionR(definitions);
    //     return this;
    // }

    dataSource() {
        // TODO: implmenet
        throw new Error("Not implemented");
    }

}

const Grid = (): GridElement => {
    let element = new GridElement();
    return element;
};

export default Grid;
