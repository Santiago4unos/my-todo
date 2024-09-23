import "./TodoItem.css";

function TodoItem(props) {
    return (
        <li 
        className="TodoItem">
            <span className={`icon icon-check--${props.completed ? 'active' : ''}`}>V</span>
            <p className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>{props.text}</p>
            <span 
            className="icon icon-delete"
            onClick={() => props.onDelete(props.text)}>X</span>
        </li>
    )
}

export { TodoItem };