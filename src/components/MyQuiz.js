import React from 'react';
import { randomQuiz } from '../lib/api';

function MyQuiz() {
  const [randomQuestions, setRandomQuestions] = React.useState(null);

  const getData = async () => {
    const resp = await randomQuiz();
    console.log('resp', resp.data);
    setRandomQuestions(resp.data);
  };

  function handleButton(e) {
    e.preventDefault();
    getData();
  }

  return (
    <section>
      <h1>My Quiz</h1>
      <div className="randomQuizContainer">
        <button onClick={handleButton}>Random Quiz</button>
        {!randomQuestions ? (
          <p></p>
        ) : (
          randomQuestions.map((question) => (
            <div className="questionContainer" key={question.question}>
              <span id="q">{question.question}</span>
              <span id="a">{question.answer}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default MyQuiz;
