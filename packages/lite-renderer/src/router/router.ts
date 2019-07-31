/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info
*
**/
var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

    // public method for encoding
    , encode: function (input)
    {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length)
        {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2))
            {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3))
            {
                enc4 = 64;
            }

            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        } // Whend 

        return output;
    } // End Function encode 


    // public method for decoding
    ,decode: function (input)
    {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length)
        {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64)
            {
                output = output + String.fromCharCode(chr2);
            }

            if (enc4 != 64)
            {
                output = output + String.fromCharCode(chr3);
            }

        } // Whend 

        output = Base64._utf8_decode(output);

        return output;
    } // End Function decode 


    // private method for UTF-8 encoding
    ,_utf8_encode: function (string)
    {
        var utftext = "";
        string = string.replace(/\r\n/g, "\n");

        for (var n = 0; n < string.length; n++)
        {
            var c = string.charCodeAt(n);

            if (c < 128)
            {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048))
            {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else
            {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        } // Next n 

        return utftext;
    } // End Function _utf8_encode 

    // private method for UTF-8 decoding
    ,_utf8_decode: function (utftext)
    {
        var string = "";
        var i = 0;
        var c, c1, c2, c3;
        c = c1 = c2 = 0;

        while (i < utftext.length)
        {
            c = utftext.charCodeAt(i);

            if (c < 128)
            {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224))
            {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else
            {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        } // Whend 

        return string;
    } // End Function _utf8_decode 

}

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

            this.hash = Base64.decode(window.location.hash.substring(1));
            var routeObject = JSON.parse(this.hash);
            
            this.path= routeObject.path;
            this.params= routeObject.params;


        }catch(err){
            // this.changeLocation('404')
            changeRoute('/', {});
        }
       
    }

    __setHash(hash: string){
        this.hash = hash;
        var routeObject = JSON.parse(Base64.decode(this.hash));
        this.path= routeObject.path;
        this.params= routeObject.params;
    }

    encode(){
        return Base64.encode(JSON.stringify(this));
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
import IDataController from '../flmc-data-layer/Base/IDataController';

export const createOnHashChangeFunction = (routes: FRoute[]) => {
    return () : [IDataController, FRoute] | undefined => {
        var currentRoute = onRoutChange();
        for(let route of routes) {
            if (route.path == currentRoute.path || (route.path == '/' && !currentRoute.path)) 
                return [route.builder(route.path, currentRoute.params), route as FRoute];
        }
    }
}

const changeHash = (hash: string) => {
    if(history.pushState) {
        history.pushState(null, "", `#${hash}`);
    }
    else {
        location.hash = `#${hash}`;
    }
    // changing history on hash doesn't trigger onhashchnage so we need to trigger it manually
    (window as any).onhashchange();
}

export const changeRoute = (path: string, params?: object) => {
    let hash = Base64.encode(JSON.stringify({
        path, 
        params: params || {}
    }));
    changeHash(hash);
}
