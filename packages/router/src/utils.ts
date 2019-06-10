export const isObject = (obj:any) =>
    obj && typeof obj === 'object' && !Array.isArray(obj);
export const getObjectKeys = (obj:object) => (isObject(obj) ? Object.keys(obj) : []);

export const viewsForDirector = (views:any, store:any) =>
    getObjectKeys(views).reduce((obj:any, viewKey) => {
        const view = views[viewKey];
        obj[view.path] = (...paramsArr:any[]) => view.goTo(store, paramsArr);
        return obj;
    }, {});

export const getRegexMatches = (string, regexExpression, callback) => {
    let match;
    while ((match = regexExpression.exec(string)) !== null) {
        callback(match);
    }
};