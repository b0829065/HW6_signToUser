import './App.css';
import React from 'react';
import ToDoAddForm from './ToDoAddForm';
import ToDoTitle from './ToDoTitle';
class ToDo extends React.Component {
  constructor (props) {
      super (props);

      this.state = {
        todos: [
            {id: 1, text: 'tip：點文字兩下可以編輯', completed: false},
            {id: 2, text: '好啦這次', completed: true},
            {id: 3, text: '身為血輪眼', completed: false},
            {id: 4, text: '人稱拷貝忍者', completed: false},
            {id: 5, text: '從原本的完全拷貝，感覺可以知道人家的術式了，領域展開！', completed: false},
        ],
        newId: 6,
        newText: '',
    }
  }
  
  // 取 todo 的內容
  getNewValue (e) {
      const newText = e.target.value;
      
      this.setState({
          newText: newText,
      });
  }
  

  // 新增
  addTodo (e) {
      const {todos, newText, newId} = this.state;
      
      if (!newText) {
          e.preventDefault();
          return;
      }
      
      this.setState({
          todos: [
              ...todos,
              {id: newId, text: newText, completed: false}
          ],
          newId: newId +1,
          newText: '',
      });
  }

  // 刪除
  deleteTodo (id) {
      const {todos} = this.state;
      
      let newTodos = todos.filter((item) => item.id !== id);
      
      this.setState({
          todos: newTodos,
      });        
  }

  // 完成
  checkTodoToggle (id) {
      const {todos} = this.state;

      let newTodos = todos.map((item) => {
          if(item.id === id){
              item.completed = !item.completed;
          }
          return item;
      });
      
      this.setState({
          todos: newTodos,
      })
  }


  // 編輯
  saveEditedValue(id, value) {
      const {todos} = this.state;

      let newTodos = todos.map((item) => {
          if(item.id === id){
              item.text = value;
          }
          return item;
      });
      
      this.setState({
          todos: newTodos,
      })
  }
  


  render () {
      let {todos} = this.state;
      
      //console.log(todos)

      return (
          <div className="container">
              <header className="header__container">
                <ToDoTitle></ToDoTitle>
              </header>
              <div className="input-group mb-3">
                  <input type="text" className="form-control" id="input-add" placeholder="add a new todo"
                      value={this.state.newText}
                      onChange={(e) => this.getNewValue(e)} />
                  <span className="input-group-append">
                      <button
                          className="btn btn-outline-secondary"
                          onClick={(e) => this.addTodo(e)}
                      >Add</button>
                  </span>
              </div>
              <ul className="list-group list-group-flush">
                  {todos.map((todo) =>
                      <ToDoAddForm
                          key={todo.id}
                          todo={todo}
                          remove={(id) => this.deleteTodo(id)}
                          checkToggle={(id) => this.checkTodoToggle(id)}
                          saveEditedValue={(id, value) => this.saveEditedValue(id, value)}
                      />
                  )}
              </ul>
          </div>
      );
  }
}
// function App() {
//   return (
//     <div>{git()}</div>
//   );
// }

export default ToDo;