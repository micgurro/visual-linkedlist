import React from "react";
import "./LinkedList.css";
import LinkedList from "./LinkedList"

const list = new LinkedList()

console.log(list)

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = list
        this.addToHead = this.addToHead.bind(this);
        this.remove = this.remove.bind(this);
        this.removeFromHead = this.removeFromHead.bind(this);
    }

    componentDidMount(){
        this._inputElement.focus();
    }

    addToHead(e) {
        if (this._inputElement.value !== "") {
            this.setState(list.addToHead(this._inputElement.value))
        };

        this._inputElement.value = "";
        console.log(list)
        e.preventDefault()
        this._inputElement.focus()
    }



    removeFromHead(e) {
        list.removeFromHead()
        this.setState(list)
        e.preventDefault()
        console.log(list)
    };

    remove(e) {
        if (this._inputDelete.value !== "") {
            list.remove(this._inputDelete.value)
        };

        this._inputDelete.value = "";
        this.setState(list)
        console.log(list)
        e.preventDefault();
        this._inputDelete.focus()
        
    }

    render() {
        let current = this.state.head;

        let items = [];

        while (current !== "null") {
            items.push(<td>{current.value}</td>);
            current = current.next;
        }
        return (
            <div className="linkedListMain">
                <h1>React Linked List</h1>
                <div className="ui">
                    <form onSubmit={this.addToHead}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="Add To Head">
                        </input>
                        <button type="submit">Add</button>
                    </form>

                    <form onSubmit={this.remove}>
                        <input ref={(a) => this._inputDelete = a}
                            placeholder="Delete Specific">
                        </input>
                        <button type="submit">Delete</button>
                    </form>

                    <button onClick={this.removeFromHead}>
                        Remove From Head</button>
                </div>

                <div className="theList" >
                    <table><tbody>
                    <tr><th>{list.action}</th>{items}</tr>
                    </tbody></table>
                </div>
            </div>
        );
    }

}

