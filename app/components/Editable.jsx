import React from 'react';
import classnames from 'classnames';

class Editabale extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {editing, value, onEdit, className, ...props} = this.props;
        if (editing) {
            return <Edit
                className={className}
                value={value}
                onEdit={onEdit}
                {...props} />
        }

        return <Value value={value} className={className} {...props} />
    }
}
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.checkEnter = this.checkEnter.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
    }

    render() {
        const {value, className, onEdit, ...props} = this.props;
        return (
            <input
                type='text'
                className={classnames('edit', className)}
                autoFocus={true}
                defaultValue={value}
                onBlur={this.finishEdit}
                onKeyPress={this.checkEnter}
                {...props} />
        );
    }

    checkEnter(e) {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    }

    finishEdit(e) {
        const value = e.target.value;

        if (this.props.onEdit) {
            this.props.onEdit(value);
        }
    }
}

class Value extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value, className, ...props} = this.props;
        return (
            <span
                className={classnames('value', className)}
                {...props}>
                {value}
            </span>
        )
    }
}

export default Editabale;