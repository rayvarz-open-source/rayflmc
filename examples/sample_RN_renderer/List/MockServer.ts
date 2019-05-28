import { CodableModel } from "../flmc/Base/IModel";

export interface ResultCallBACK {
    (result: SampleModel[]): void
}

export class SampleModel extends CodableModel {

    constructor(public name: string = "", public description: string = "") { super() }

}

const NUMBER_OF_ITEMS_IN_A_PAGE = 4;

export class MockServer {

    fakeData: SampleModel[] = [
        new SampleModel("Sahand", "This is a sample long description"),
        new SampleModel("Ali", "This is a sample long desc"),
        new SampleModel("Mamad", "This is a sample long desc"),
        new SampleModel("Taqi", "This is a !!! long description"),
        new SampleModel("Akbar", "This is a sample long description☺"),
        new SampleModel("Morteza", "This is a sample long description"),
        new SampleModel("Sahand", "This is a sample long description"),
        new SampleModel("Sahand", "This ☺is a sample long description"),
        new SampleModel("Sahand", "☺This is a sample long description"),
        new SampleModel("Sahand", "This is a sample long description"),
        new SampleModel("Sahand", "This is a sample long description"),
        new SampleModel("Sahand", "This is a☺ sample long description"),
        new SampleModel("Sahand", "This is a☺ sample long description"),
        new SampleModel("Sahand", "This is a☺ sample long description"),
        new SampleModel("☺", "This is a☺ sample long description"),
        new SampleModel("☺", "This is a☺ sample long description"),
        new SampleModel(":)", "This is a☺ sample long description"),
    ];

    getData(pageNo: number = 0, search:string = "", callback: ResultCallBACK): void {
        setTimeout(() => {
            callback(this.fakeData
                .filter(item => item.name.search(search) != -1 || item.description.search(search) != -1)
                .slice(pageNo * NUMBER_OF_ITEMS_IN_A_PAGE, (pageNo + 1) * NUMBER_OF_ITEMS_IN_A_PAGE));
        }, 3000);
    }

}