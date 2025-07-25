import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAIQuestions } from '../../services/OpenrouterAPI';
import './SubjectCard.css';

export function SubjectCard({ subject }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleTakeQuiz = async () => {
        setLoading(true); // Show message
        try {
            const questions = await fetchAIQuestions(subject.name);
            navigate('/quiz', { state: { questions } });
        } catch (error) {
            console.error('Error fetching questions:', error);
            alert('Failed to load quiz questions. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='subject-card'>
            <div className='subjectcard-logo'>{subject.icon}</div>
            <h3 className='subjectcard-title'>{subject.name}</h3>
            <p className='subjectcard-description'>{subject.description}</p>
            <div className='subjectcard-details'>
                <span className='subjectcard-questions'>{subject.questionsCount} questions</span>
            </div>

            {
                loading ? (
                    <p className='loading-text'>⏳ Please wait a while we prepare your quiz...</p>
                ) : (
                    <button className='subjectcard-submit' onClick={handleTakeQuiz}>
                        Take Quiz
                    </button>
                )
            }
        </div>
    );
}

