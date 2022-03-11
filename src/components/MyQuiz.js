import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function MyQuiz({ allCategories }) {
  const [myQuestions, setMyQuestions] = React.useState(getState());

  function getState() {
    if (localStorage.savedQuestions) {
      return JSON.parse(localStorage.savedQuestions);
    } else {
      return [];
    }
  }

  React.useEffect(() => {
    localStorage.setItem('savedQuestions', JSON.stringify(myQuestions));
  }, [myQuestions]);

  function removeQuestion(ques, ans, qId) {
    const checkRemoveQuestion = myQuestions.find((ques) => ques.qId === qId);
    console.log('checkRemoveQuestion', checkRemoveQuestion);
    if (checkRemoveQuestion) {
      const filteredQuiz = myQuestions.filter((ques) => ques.qId !== qId);
      setMyQuestions(filteredQuiz);
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
            myQuestions.map(({ question, answer, category, qId }) => (
              <div className='generated-questionContainer' key={question}>
                <div className='category-and-delete'>
                  <span id='generated-category'>{allCategories[category]}</span>
                  <span>
                    <FontAwesomeIcon
                      onClick={() => removeQuestion(question, answer, qId)}
                      className='x-mark'
                      icon={faXmark}
                    />
                  </span>
                </div>
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
