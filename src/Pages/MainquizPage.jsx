import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MainquizPage.css';

function Mainquiz() {
    const location = useLocation();
    const { questions = [] } = location.state || {};

    const [currentQuestionIndex, SetcurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});

    const currentQuestion = questions[currentQuestionIndex];
    const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionClick = (optionKey) => {
        setSelectedOptions(prev => ({
            ...prev,
            [currentQuestionIndex]: optionKey,
        }));
    }

    const goToPrev = () => {
        if (currentQuestionIndex > 0) {
            SetcurrentQuestionIndex(currentQuestionIndex - 1);
        }
    }

    const goForward = () => {
        if (currentQuestionIndex < questions.length - 1) {
            SetcurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            let correctCount = 0;
            questions.forEach((q, i) => {
                if (selectedOptions[i] === q.answer) {
                    correctCount++;
                }
            });
            setScore(correctCount);
            setIsQuizSubmitted(true);
        }
    };

    if (!questions.length) {
        return <div className="QuizPage">No questions available. Go back to home.</div>;
    }

    if (isQuizSubmitted) {
        return (
            <div className="QuizPage">
                <div className="ResultCard">
                    <h2 className="ResultHead">Quiz Completed!</h2>
                    <p className="ResultDeclare">
                        You solved <span>{score}</span> out of {questions.length}
                    </p>
                    <p className="ResultSuggest">
                        {score === questions.length
                            ? "🔥 Outstanding! You're a quiz master!"
                            : score >= 8
                                ? "🚀 Great job! Keep it up!"
                                : score >= 5
                                    ? "💪 Good try! Review and improve!"
                                    : "🌱 Don't give up! Try again and grow!"}
                    </p>

                    <div className="ReviewSection">
                        <h3 className="ReviewTitle">📚 Review Your Answers</h3>
                        {questions.map((q, index) => {
                            const isCorrect = selectedOptions[index] === q.answer;
                            return (
                                <div key={index} className={`ReviewQuestion ${isCorrect ? 'Correct' : 'Wrong'}`}>
                                    <h4 className="QuestionText">Q{index + 1}. {q.question}</h4>
                                    <p className="UserAnswer"><strong>Your Answer:</strong> {q.options[selectedOptions[index]] || "Not Answered"}</p>
                                    {!isCorrect && (
                                        <p className="CorrectAnswer"><strong>Correct Answer:</strong> {q.options[q.answer]}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='QuizPage'>
            <div className="QuizTitle">Quiz Time!</div>
            <div className="QuizCard">
                <div className="QuizHeader">
                    <h2>Question</h2>
                    <p>{currentQuestionIndex + 1} of {questions.length}</p>
                </div>

                <div className='QuestionBox'>
                    <h3>{currentQuestion.question}</h3>
                    <div className='OptionsList'>
                        {Object.entries(currentQuestion.options).map(([key, value]) => (
                            <button
                                key={key}
                                className={`OptionBtn ${selectedOptions[currentQuestionIndex] === key ? 'Selected' : ''}`}
                                onClick={() => handleOptionClick(key)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='NavigationButtons'>
                    <button onClick={goToPrev} disabled={currentQuestionIndex === 0}>Previous</button>
                    <button
                        onClick={goForward}
                        disabled={currentQuestionIndex === questions.length && isQuizSubmitted}
                    >
                        {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Mainquiz;
