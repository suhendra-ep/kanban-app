import React from 'react';

const Edit = ({ onEdit = () => { }, value, ...props }) => (
    <div>
        <span>edit: {value}</span>
    </div>
);

export default ({editing, value, onEdit, ...props}) => {
    if (editing) {
        return <Edit value={value} onEdit={onEdit} {...props} />
    }

    return <span {...props}>value: {value}</span>;
}