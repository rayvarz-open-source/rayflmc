export interface IControllerBuilder {
    (path: string, params:object): object;
}

export type Props = {
    path: string,
    params: object,
    hash: string,
    controller: IControllerBuilder,
}

export default class Route {
    //props
    path: string;
    params: object;
    hash: string;
    //lifecycle methods
    controller: IControllerBuilder;

    constructor(props : Props) {
        this.path= props.path;
        this.params= props.params;
        this.hash= props.hash;
        this.controller = props.controller;
    }

    // async go(){
    //     console.log('go: ' + JSON.stringify(this))
    // }

    // changeLocation(prop){
    //     console.log(prop)
    // }


    __initFromUrl(){
        try{

            this.hash = atob(window.location.hash.substring(1));
            var routeObject = JSON.parse(this.hash);
            
            this.path= routeObject.path;
            this.params= routeObject.params;


        }catch(err){
            // this.changeLocation('404')
            console.warn(err);
        }
    }

    __setHash(hash: string){
        this.hash = hash;
        var routeObject = JSON.parse(atob(this.hash));
        this.path= routeObject.path;
        this.params= routeObject.params;
    }

    encode(){
        return btoa(JSON.stringify(this));
    }

}