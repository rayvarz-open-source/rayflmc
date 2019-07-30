import { BehaviorSubject } from "rxjs";
import { Modal, Button, Label, FormController} from 'lite-renderer'

export default class CustomSkeletonForm extends FormController {

    skeleton = "Custom Skeleton"

    elements = [
        Button("Custom Skeleton"),
    ]

}
