import React, { useRef, FC, ReactElement } from 'react'
import { ITodo } from '../typings';

// 接口，获取输入参数。参数格式单独写道typings中
interface IProps {
    // void表示addTodo没有返回值
    addTodo: (todo: ITodo) => void;
    todoList: ITodo[]; // todoList是ITodo的集合
}

// FC表示function component，IProps表示输入的参数，addTodo和todoList是从interface中接收的参数，从这里传入函数组件进行使用
const TdInput: FC<IProps> = ({
    addTodo,
    todoList
}): ReactElement => {
// ReactElement表示函数组件TdInput中return一个JSX即ReactElement
// 注意以上为函数组件的基本写法，都这样写

    // 获取input框中输入的值
    // useRef、useState都需要写<HTMLInputElement>泛型
    const inputRef = useRef<HTMLInputElement>(null)
    console.log(inputRef);
    

    // 判断输入input框中的值是否为空（使用！告诉TS一定不为空）并去掉空格
    const addItem = (): void => {
        // val就是placeholder中输入的值
        const val: string = inputRef.current!.value.trim();
        // 判断输入的todo是否与已有todo重合，若重合则alert已存在该项，若不重合，则传入addtodo
        // 查找已有todolist中每一项todo的content看是否与当前输入的val相等
        
        if (val.length) {
            const isExist = todoList.find(todo => todo.content === val);
            if(isExist) {
                alert('已存在该项');
                return;
            }
            // 不存在输入的todo则将其传入到addTodo中
            addTodo({
                id: new Date().getTime(),
                content: val,
                completed: false
            });
            // 将input框中的内容清空
            inputRef.current!.value='';
        }
    }

    return (
        <div className='todo-input'>
            <input type="text" placeholder='请输入待办事项' />
            <button onClick={addItem}>增加</button>
        </div>
    );
}

export default TdInput;