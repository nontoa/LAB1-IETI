import React from 'react';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        const {text,priority,dueDate} = this.props;
        return (  
          <li>{text} {priority} {dueDate}</li>
        );
    }

}