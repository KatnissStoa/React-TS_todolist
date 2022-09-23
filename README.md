# Key conclusion
## 冒号的使用
1. 方法中
`const addItem = (): void => {XXX}`addItem的返回值为空void
2. 接口中
`addTodo: (todo: ITodo) => void;`addTodo方法需要传入参数todo
`todoList: ITodo[];`todoList是ITodo的集合
`todo: ITodo;`todo参数的类型是ITodo
`removeTodo: (id: number) => void;`点击每一项的button，通过id对应到点击的那一项来进行删除，该方法同样没有返回值故为void
3. typings中
```typescript
export interface ITodo {
    id: number;
    content: string;
    completed: boolean
}
```
限定三个参数的类型

## 函数组件的TS常规写法
```typescript
//FC表示function component，IProps表示输入的参数，addTodo和todoList是从interface中接收的参数，从这里传入函数组件进行使用
const TdInput: FC<IProps> = ({
    addTodo,
    todoList
}): ReactElement => {
//ReactElement表示函数组件TdInput中return一个JSX即ReactElement
//注意以上为函数组件的基本写法，都这样写
```

## 接口写法
```typescript
// 接口用于获取todo参数，todo参数的类型是ITodo
interface IProps {
    todo: ITodo;
    // 使用toggleTodo方法来匹配id从而将对应todo是否勾选改为true/false，该方法没有返回值故为void
    toggleTodo: (id: number) => void;
    // 点击每一项的button，通过id对应到点击的那一项来进行删除，该方法同样没有返回值故为void
    removeTodo: (id: number) => void;
}
```

## useRef、useState写法的特殊之处
`const inputRef = useRef<HTMLInputElement>(null)`获取input框中输入的值；useRef、useState都需要写`<HTMLInputElement>`泛型