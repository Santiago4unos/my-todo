import './CreateTodoModal.css';

function CreateTodoModal() {
    return (
        <div className="CreateTodoModal">
            <div className="CreateTodoModal-container">
                <span className="close">&times;</span>
                <h3>Agrega una nueva tarea</h3>
                <input type="text" id="CreateTodoModal-input"/>
                <button id="CreateTodoModal-btn">Agregar</button>
            </div>
        </div>
    )
}

export { CreateTodoModal };