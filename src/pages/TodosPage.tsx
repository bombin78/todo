import React, { useState, useEffect } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';


declare const confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now(),
            title,
            completed: false,
        };

        setTodos((prev) => [newTodo, ...todos]);
    };

    const toggleHandler = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    };

    const removeHandler = (id: number) => {
        // const shouldRemove = window.confirm('Вы уверены, что хотите удалить элемент?');
        // Второй вариант без window + смотри declare выше
        const shouldRemove = confirm('Вы уверены, что хотите удалить элемент?');
        if (shouldRemove) {
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        }
    };

    return (
        <React.Fragment>
            <TodoForm onAdd={addHandler} />
            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </React.Fragment>
    );
};