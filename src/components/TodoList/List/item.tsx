import React, { FC, ReactElement } from 'react'
import { ITodo } from '../typings';

// 接口用于获取todo参数，todo参数的类型是ITodo
interface IProps {
    todo: ITodo;
    // 使用toggleTodo方法来匹配id从而将对应todo是否勾选改为true/false，该方法没有返回值故为void
    toggleTodo: (id: number) => void;
    // 点击每一项的button，通过id对应到点击的那一项来进行删除，该方法同样没有返回值故为void
    removeTodo: (id: number) => void;
}
//传入todo这个对象并解构它，该函数返回一个reactelement（JSX）
// todo,toggleTodo,removeTodo都是参数
const TdItem: FC<IProps> = ({
    todo,
    toggleTodo,
    removeTodo
}): ReactElement => {
    // 解构传入的todo对象
    const {id, content, completed} = todo;
    return (
        <div className='todo-item'>
            <input
                type='checkbox'
                checked={ completed }
                onChange={()=>toggleTodo(id)}
            />
            <span
            // 通过completed的true或false来设置todo是否有textDecoration中横线划掉
                style={{textDecoration: completed ? 'true' : 'false'}}
            >{content}</span>
            <button
                onClick={()=>removeTodo(id)}
            >删除</button>
        </div>
    );
}

export default TdItem;