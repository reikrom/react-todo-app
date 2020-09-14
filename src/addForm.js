import React, { useState } from "react";

const AddForm = ({ addTodo }) => {
	const [content, setContent] = useState("");

	const handleChange = e => {
		setContent(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		addTodo({ id: Math.random(), content });
		setContent("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Add new todo:</label>
				<input type="text" value={content} onChange={handleChange} />
			</form>
		</div>
	);
};

export default AddForm;
