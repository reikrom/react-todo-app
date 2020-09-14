import React from "react";

const Todos = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<div
					className="collection-item todo-item blue-grey lighten-5

                "
					key={todo.id}
				>
					<span>{todo.content}</span>
					<button
						onClick={() => {
							deleteTodo(todo.id);
						}}
						className="btn blue darken-2"
					>
						Delete
					</button>
				</div>
			);
		})
	) : (
		<p className="center"> You have no todo's left, yay!</p>
	);

	return <div className="todos collection z-depth-1">{todoList}</div>;
};

export default Todos;
