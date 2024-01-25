import { useState } from "react";
import styles from './Quiz.module.css'
const Quiz = ({ data }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleClick = (key, correct_answer) => {
    if (key === correct_answer) {
      setScore(score + 1);
    }
    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const resetQuiz = () => {
    // Reset state to retake the quiz
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  // Check if all questions have been answered
  const allQuestionsAnswered = currentQuestionIndex === data.length;

  return (
    <div>
      <div className="">
        {!allQuestionsAnswered && (
          <div  key={data[currentQuestionIndex].id} >
            <h3 className="d-grid gap-2 col-10 mx-auto p-2 m-2 rounded text-white">{data[currentQuestionIndex].question}</h3>
            <ul className="list-group ">
              {Object.entries(data[currentQuestionIndex].answers).map(
                ([key, value]) =>
                  value !== null && (
                    <li className={`list-group-item border-0 ${styles.bgimg}`}  key={key}>
                      <div className=" d-grid gap-2 col-10 mx-auto">
                        <button
                          onClick={() =>
                            handleClick(key, data[currentQuestionIndex].correct_answer)
                          }
                          className="btn text-white bg-transparent fs-4 m-1 rounded "
                          type="button"
                        >
                          {value}
                        </button>
                      </div>
                    </li>
                    
                  )
              )}
              
                </ul>
              <div className="d-grid gap-2 col-6 mx-auto">
              <button  className="btn btn-warning fs-4 m-3 rounded "
                          type="button"
                          onClick={() =>{
                            handleClick("", data[currentQuestionIndex].correct_answer)
                          }
                        }>Skip Question</button>
              </div>
              
          </div>
        )}
        {allQuestionsAnswered && (
          <div >
            <h2 className="text-white">Quiz completed! <br/> Your score: {score}</h2>
            <button onClick={resetQuiz} className="btn btn-primary fs-2 p-3 m-2 ">
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
