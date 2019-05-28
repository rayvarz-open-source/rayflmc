import IElement, { ValidationResult } from '../IElement';
import { Observable, BehaviorSubject } from 'rxjs';
export declare enum Direction {
    Column = 0,
    Row = 1
}
export declare class ContainerElement implements IElement {
    dispose(): void;
    readonly type: string;
    childrenContainer: BehaviorSubject<IElement[]>;
    validate(): ValidationResult;
    private childrenR;
    private childrenO;
    children(children_: Observable<IElement[]> | IElement[]): ContainerElement;
    directionValue: BehaviorSubject<Direction>;
    private directionR;
    private directionO;
    direction(dir: Observable<Direction> | Direction): ContainerElement;
}
declare const Container: (children?: IElement[] | Observable<IElement[]> | undefined) => ContainerElement;
export default Container;
