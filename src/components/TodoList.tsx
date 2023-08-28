import {ITodo} from '../types/data'

import {TodoItem} from './TodoItem'

interface TodoListProps {
    item: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const {item, toggleTodo, removeTodo} = props;
    return <div>
        {
            item.map(todo => <TodoItem 
                key={todo.id} 
                toggleTodo={toggleTodo} 
                removeTodo={removeTodo}
                {...todo} />)
        }
    </div>
}

export {TodoList}