import React from 'react';

const Edits = ({ onEdit = () => { }, value, ...props }) => (
    <div>
        <span>edit: {value}</span>
    </div>
);

export default ({editing, value, onEdit, ...props}) => {
    if (editing) {
        return <Edit value={value} onEdit={onEdit} {...props} />
    }

    return <span {...props}>{value}</span>;
}

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.checkEnter = this.checkEnter.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
    }

    render() {
        const {value, onEdit, ...props} = this.props;
        return (
            <input
                type='text'
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