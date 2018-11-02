import React, { Component } from 'react';

export default class addTodo extends Component {
    // constructor(props){
    //     super(props)
    // }
    onSubmit(ev){
        ev.preventDefault();
        const input = this.refInput;
        if(!input.value.trim()) {
            return;
        }else {
            this.props.onAdd(input.value);
            input.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                <input ref= {this.refInput} />
                <button type="submit">Sumbit</button>
                </form>
                
            </div>
        )
    }

}