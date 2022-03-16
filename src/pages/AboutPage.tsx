import React from 'react';
import {useNavigate} from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate omnis reiciendis vero nobis aperiam provident.</p>
            <button 
                className="btn"
                onClick={() => navigate('/', { replace: true })}
            >
                Обратно к списку дел
            </button>
        </>
    );
};