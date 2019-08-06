import React from "react";

import { BehaviorSubject } from "rxjs";
import {
  Button,
  ButtonColor,
  FormController,
  Container,
  ContainerDirection,
  Label,
  ButtonVariant,
  Raw
} from "lite-renderer";

export default class RawElementForm extends FormController {
  elements = [Label("Code Block :"), Raw(_ => <code>Raw Element</code>)];
}
