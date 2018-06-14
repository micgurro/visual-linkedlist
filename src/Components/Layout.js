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

    componentDidMount() {
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
            items.push(<li>{current.value}</li>);
            current = current.next;
        }
        return (

            <div className="linkedListMain">
                <div className="header">
                    <h1>Data Structure Visualizer: Singly-Linked List</h1>

                </div>
                <div className="ui">
                    <form onSubmit={this.addToHead}>
                        
                        <button type="submit"><input ref={(a) => this._inputElement = a}
                        placeholder="Add To Head">
                    </input>+</button>
                    </form>

                    {/*<!---<form onSubmit={this.find}>
                        <input ref={(a) => this._inputFind = a}
                            placeholder="Highlight Node">
                        </input>
                        <button type="submit">Find</button>
                    </form>--->*/}

                    <form onSubmit={this.remove}>
                        <button type="submit"> <input ref={(a) => this._inputDelete = a}
                        placeholder="Delete Specific">
                    </input> -</button>
                    </form>



                    <button id="removeHead" onClick={this.removeFromHead}>
                        Remove Head</button>
                </div>

                <div className="theList" >
                    
                        <ul><h3 id="action">{list.action}</h3></ul>{items}
                    
                </div>

                <div className="footer">
                    <footer>
                        <a href="https://opensource.org/licenses/MIT">
                        Licensed under MIT </a> Copyright &copy; 2018 < hr/>
                        <a href="https://github.com/kbougy">
                        Concept: Kyri Vanderpoel </a><br />
                        <a href="https://gitbhub.com/micgurro">
                        Code: Michael "Meeko" Guerrero</a><br />
                        Made with React!
                        
                </footer>
                </div>
            </div>
        );
    }

}

