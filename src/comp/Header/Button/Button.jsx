import React from 'react';
import classNames from 'classnames';

class Button1 extends React.Component {

    render() {
        return <button className={classNames(
            'button', {'button--outline': this.props.outline}
        )}>{this.props.children}</button>
    }
}

const Button = (props) => {
    return <button className={classNames(
        'button', {'button--outline': props.outline}
    )}>{props.children}</button>
}


export default Button;