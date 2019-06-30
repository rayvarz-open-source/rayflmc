import * as React from 'react';
import JsBarcode from 'jsbarcode';

var getDOMNode;
// https://github.com/kciter/react-barcode/blob/master/src/react-barcode.js
// Super naive semver detection but it's good enough. We support 0.12, 0.13
// which both have getDOMNode on the ref. 0.14 and 15 make the DOM node the ref.
var version = React.version.split(/[.-]/);
if (version[0] === '0' && version[1] === '13' || version[1] === '12') {
    getDOMNode = (ref) => ref.getDOMNode();
} else {
    getDOMNode = (ref) => ref;
}

type Props = {
    value: any
}

class Barcode extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    };

    componentDidMount() {
        this.update();
    };

    componentDidUpdate() {
        this.update();
    };

    update() {
        var renderElement = getDOMNode(this.refs.renderElement);
        try {
            JsBarcode(renderElement, this.props.value);
        } catch (e) {
            // prevent stop the parent process
            window.console.error(e);
        }
    };

    render() {
        return <img ref="renderElement" style={{width: '100px'}}/>;
    };


}

export default Barcode;
