import React from "react";



export default class LinkedListNodes extends React.Component {
    constructor(props){
        super(props);
        this.createNodes = this.createNodes.bind(this);
    }
    createNodes(node) {
        return <li> {node.head.value}</li>
    }

    render(){
        var nodes = this.props.next.value;
        var listNodes = nodes.map(createNodes);
  

        return(
            <ul>{listNodes}</ul>
        );
    }

}