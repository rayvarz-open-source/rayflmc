import { Button, Container, ContainerDirection, FormController, Image, ImageBorderType, ImageScaleType, Label } from "lite-renderer";
import { BehaviorSubject } from "rxjs";

export default class ImageForm extends FormController {
  inject(injector) {
    super.inject(injector);
    let service = injector.inject("TestService");
    console.log(service.value);
  }
  loading = new BehaviorSubject(true);

  elements = [
    Button("Pop").onClick(() => this.routerService.pop()),
    Button("Push Button").onClick(() => this.routerService.push('/button', {})),
    Label("ImageBorderType"),
    Container([
      Label("ImageBorderType.Avatar:"),
      Image("https://via.placeholder.com/100x100")
        .border(ImageBorderType.Avatar)
        .width(100)
        .height(100),
      Label("ImageBorderType.Round:"),
      Image("https://via.placeholder.com/100x100")
        .border(ImageBorderType.Round)
        .width(100)
        .height(100),
      Label("ImageBorderType.None:"),
      Image("https://via.placeholder.com/100x100")
        .border(ImageBorderType.None)
        .width(100)
        .height(100)
    ]).direction(ContainerDirection.Row),
    Label("Cover"),
    Image("https://via.placeholder.com/300x100")
      .scale(ImageScaleType.Cover)
      .width(100)
      .height(100),
    Label("Fill"),
    Image("https://via.placeholder.com/300x100")
      .scale(ImageScaleType.Fill)
      .width(100)
      .height(100),
    Label("ScaleDown"),
    Image("https://via.placeholder.com/300x100")
      .scale(ImageScaleType.ScaleDown)
      .width(100)
      .height(100),
    Label("Contain"),
    Image("https://via.placeholder.com/300x100")
      .scale(ImageScaleType.Contain)
      .width(100)
      .height(100)
  ];
}
