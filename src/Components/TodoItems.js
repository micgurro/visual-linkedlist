import React from "react";

export default class TodoItems extends React.Component {

    constructor(props) {
        super(props); 

        this.createTasks = this.createTasks.bind(this);

    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return<li onClick ={() => this.delete(item.key)}
                    key= {item.key}>{item.text}</li>
    }
    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
            <ul className = "theList">
                {listItems}
            </ul>
        );
    }

}