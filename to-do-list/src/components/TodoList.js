import React, {Component} from 'react';
import Lista from './Lista';

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state ={
            tarefa: '',
            items: []
        }

        this.adicionarItem = this.adicionarItem.bind(this);
        // this.delete = this.delete.bind(this);
    }

    adicionarItem(e){
        let state = this.state;
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            }

            this.setState({items: [...state.items, newItem]});
        }

        this.setState({tarefa: ''})

        e.preventDefault();
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(key){
        let filtro = this.state.items.filter((item)=>{
            return(item.key !== key);
        })

        this.setState({items: filtro})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.adicionarItem}>
                    <input type="text" placeholder='Nova tarefa' name='tarefa'
                        value={this.state.tarefa} onChange={(e)=>{this.setState({tarefa: e.target.value})}}
                        ref={(e)=> this._tarefaInput = e}
                    />

                    <button type='submit'>Adicionar</button>
                </form>

                <Lista lista={this.state.items} delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;