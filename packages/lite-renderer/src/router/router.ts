const isObject = (obj:any) =>
    obj && typeof obj === 'object' && !Array.isArray(obj);
const getObjectKeys = (obj:object) => (isObject(obj) ? Object.keys(obj) : []);

const viewsForDirector = (views:any, store:any) =>
    getObjectKeys(views).reduce((obj:any, viewKey) => {
        const view = views[viewKey];
        obj[view.path] = (...paramsArr:any[]) => view.goTo(store, paramsArr);
        return obj;
    }, {});


interface RegexCallBack {
    (value: RegExpExecArray): void;
}

const getRegexMatches = (string:string, regexExpression:RegExp, callback:RegexCallBack) => {
    let match;
    while ((match = regexExpression.exec(string)) !== null) {
        callback(match);
    }
};

/* eslint-disable */
const paramRegex = /(:([^\/?]*)\??)/g;
const optionalRegex = /(\/:[^\/]*\?)$/g;

interface IControllerBuilder {
    (path: string, params:object): object;
}

type Props = {
    path: string,
    params: object,
    hash: string,
    controller: IControllerBuilder,
}

class Route {
    //props
    path: string;
    params: object;
    hash: string;
    //lifecycle methods
    controller: IControllerBuilder;

    constructor(props? : Props) {
        if (props != null) {
            this.path= props.path;
            this.params= props.params;
            this.hash= props.hash;
            this.controller = props.controller;
        }
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

function onRoutChange(props?: Props): Route {
    var route = new Route(props);
    if (props == null) {
        route.__initFromUrl();
    } else {
        if (props.hash != undefined) {
            route.__setHash(props.hash);
        }
        if (props.path != undefined) {
            route.path = props.path;
        }
        if (props.params != undefined) {
            route.params = props.params;
        }
    }
    return route;
    // routeList.forEach(element => {
    //   if(element.path == route.path){
    //     element.controller(element.path,route.params);
    //   }
    // });
}

import { Route as FRoute } from './route';

export const createOnHashChangeFunction = (routes: FRoute[]) => {
    return () => {
        var currentRoute = onRoutChange();
        for(let route of routes) {
            if (route.path == currentRoute.path || (route.path == '/' && currentRoute.path == null)) 
                return route.builder(route.path, currentRoute.params);
        }
        console.warn(`Could not find path: ${currentRoute.path}`);
    }
}
