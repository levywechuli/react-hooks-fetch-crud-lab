import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDelete = async () => {
    try {
      // Send DELETE request to the API
      const response = await fetch(`http://localhost:4000/questions/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Call onDelete passed from App to remove the question from state
        onDelete(id);
      } else {
        console.error("Error deleting question:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
