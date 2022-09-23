import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react'
import TdInput from './Input';
import TdList from './List';
import { ITodo } from './typings';

const TodoList: FC = ():ReactElement => {

    // todoList初始值是一个空数组[]，其类型是集合类型（ITodo[]数组）
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    // 打印输入的与已有todo不重合的todo
    useEffect(()=>{
        console.log(todoList);
    }, [todoList]);

    // addTodo接收的参数是todo，其类型是ITodo，函数的返回值是void
    // 子组件中的方法是由父组件传递过去的，那都用useCallback来包一下，提升性能
    const addTodo = useCallback((todo: ITodo): void => {
        // console.log(todo);
        // setTodoList的操作是把todoList展开，并把新的todo放进去
        setTodoList(todoList => [...todoList, todo])
    }, [])

    const removeTodo = useCallback((id: number): void => {

    }, [])

    const toggleTodo = useCallback((id: number): void => {

    }, [])
    return (
        <div className='todo-list'>
            {/* 将addTodo和todoList两个属性传过去 */}
            <TdInput
                addTodo={ addTodo }
                todoList={ todoList }
            />
            <TdList
                todoList={todoList}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    );
}

export default TodoList;
