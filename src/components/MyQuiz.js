import React from 'react';

function MyQuiz({ allCategories }) {
  const [myQuestions, setMyQuestions] = React.useState(getState());

  function getState() {
    if (localStorage.savedQuestions) {
      return JSON.parse(localStorage.savedQuestions);
    } else {
      return [];
    }
  }

  function handleButton() {
    localStorage.removeItem('savedQuestions');
    setMyQuestions(getState);
  }

  console.log('myQuestions', myQuestions);
  return (
    <section className='myQuiz-section'>
      <div className='myQuiz-container'>
        <h1>My Quiz</h1>
        <div className='all-questions-container'>
          <button className='reset-quiz' onClick={handleButton}>
            Reset Quiz
          </button>
          {myQuestions.length === 0 ? (
            <h2>
              Select questions from the categories by clicking on them, and your list of questions
              will be displayed here!!
            </h2>
          ) : (
            myQuestions.map(({ question, answer, category }) => (
              <div className='generated-questionContainer' key={question}>
                <span id='generated-category'>{allCategories[category]}</span>
                <span id='generated-question'>{question}</span>
                <span id='generated-answer'>{answer}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default MyQuiz;
