import React from "react";
import './ListToDo.scss'
import AddToDo from "./AddToDo";



class ListToDo extends React.Component {
    state = {
        listToDos: [
            { id: '001', title: 'playing game', },
            { id: '002', title: 'cooking dinner', },
            { id: '003', title: 'doing  homewwork', },
        ],
        editToDo: {}
    }
    addNewToDo = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })
        alert('thành công')
    }
    handleDeleteToDo = (todo) => {
        let currentToDo = this.state.listToDos;
        currentToDo = currentToDo.filter(item => item.id !== todo.id)
        this.setState({
            listToDos: currentToDo
        })
        alert('xóa thành công')
    }
    handleEditToDo = (todo) => {
        let {editToDo, listToDos} = this.state;
        let isEmptyObj = Object.keys(editToDo).length === 0;
        //save
        if (isEmptyObj === false && editToDo.id === todo.id) {
            let listTodosCopy = [...listToDos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            
            listTodosCopy[objIndex].title = editToDo.title;
            this.setState({
                listToDos: listTodosCopy,
                editToDo: {}

            })

            return;
        }
        
            //edit
            this.setState({
                editToDo: todo
            })
        
    }
    handleOnchangeEditToDo = (event) => {
        let editToDoCopy = { ...this.state.editToDo };
        editToDoCopy.title = event.target.value;
        this.setState({
            editToDo: editToDoCopy
        })
    }


    render() {
        let { listToDos, editToDo } = this.state;
        // let listToDos = this.state.thisToDos;
        let isEmptyObj = Object.keys(editToDo).length === 0;
        console.log('check empty obj', isEmptyObj)

        return (
            <div className="list-todo-container">
                <AddToDo
                    addNewToDo={this.addNewToDo}
                />
                <div className="list-todo-content">
                    {
                        listToDos && listToDos.length > 0 &&
                        listToDos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {
                                        isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editToDo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editToDo.title}
                                                            onChange={(event) => this.handleOnchangeEditToDo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                    }
                                    {/* <input value={item.title}/> */}
                                    <button
                                        onClick={() => this.handleEditToDo(item)}
                                    >
                                        {isEmptyObj === false && editToDo.id === item.id ?
                                            'save' : 'Edit'
                                        }

                                    </button>
                                    <button
                                        onClick={() => this.handleDeleteToDo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        )
    }

}
export default ListToDo;