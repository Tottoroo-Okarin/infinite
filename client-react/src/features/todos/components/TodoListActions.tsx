import { useRef } from "react"

interface TodoListActionsProps {
    addTodo: (name: string) => void;
    clearCompletedTodos: () => void;
  }
  
  export const TodoListActions = ({addTodo, clearCompletedTodos}: TodoListActionsProps) => {
    const todoNameRef: any = useRef()    

    return(
      <div>
        <input ref={todoNameRef} type="text"> 
        </input>
        <button onClick={() => addTodo(todoNameRef.current.value)}>
          Add Todo
        </button>
        <button onClick={() => clearCompletedTodos()}>
          Clear Completed Todos
        </button>
      </div>
    )
  }