import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDelete }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p>No questions available</p>
        )}
      </ul>
    </section>
  );
}

export default QuestionList;