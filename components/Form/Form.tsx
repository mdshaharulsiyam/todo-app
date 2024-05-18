'use client'
import { createTodo, updateTodo } from '@/States/Todo/Todo';
import { saveTodosToLocalStorage, updateTodoById } from '@/utils/LocalStorage';
import React, { FormEvent } from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
type MyType = {
    type: string;
    value: {
        id: string;
        heading: string;
        description: string;
    } | null;
};
const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return `${randomNumber}`;
};
const Form = ({ type, value }: MyType) => {
    const dispatch = useDispatch()
    const handelsubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // const target = e.target as typeof e.target & {
        //     heading: { value: string };
        //     description: { value: string };
        // };
        const target = e.target as HTMLFormElement;
        const heading = target.heading.value;
        const description = target.description.value;
        if (type === 'create') {
            const todos = {
                id: generateRandomNumber(),
                heading,
                description
            }
            saveTodosToLocalStorage(todos)
            dispatch(createTodo(todos))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "new task has been created",
                showConfirmButton: false,
                timer: 1500
            });
            target.reset();
        } else {
            const taskId = value?.id
            if (taskId) {
                updateTodoById(taskId, heading, description)
                dispatch(updateTodo({
                    id: taskId,
                    data: {
                        heading, description
                    }
                }))
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your task has been updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }
    }
    return (
        <form onSubmit={handelsubmit} className='w-full'>
            <div className="form-control">
                <input type="text" defaultValue={value?.heading ? value?.heading : ''} name='heading' required />
                <label>
                    <span style={{ transitionDelay: "0ms" }}>H</span>
                    <span style={{ transitionDelay: "50ms" }}>e</span>
                    <span style={{ transitionDelay: "100ms" }}>a</span>
                    <span style={{ transitionDelay: "150ms" }}>d</span>
                    <span style={{ transitionDelay: "200ms" }}>i</span>
                    <span style={{ transitionDelay: "250ms" }}>n</span>
                    <span style={{ transitionDelay: "300ms" }}>g</span>
                </label>
            </div>
            <div className="form-control">
                <input type="text" defaultValue={value?.description ? value?.description : ''} name='description' required />
                <label>
                    <span style={{ transitionDelay: "0ms" }}>D</span>
                    <span style={{ transitionDelay: "50ms" }}>e</span>
                    <span style={{ transitionDelay: "100ms" }}>s</span>
                    <span style={{ transitionDelay: "150ms" }}>c</span>
                    <span style={{ transitionDelay: "200ms" }}>r</span>
                    <span style={{ transitionDelay: "250ms" }}>i</span>
                    <span style={{ transitionDelay: "300ms" }}>p</span>
                    <span style={{ transitionDelay: "300ms" }}>t</span>
                    <span style={{ transitionDelay: "300ms" }}>i</span>
                    <span style={{ transitionDelay: "300ms" }}>o</span>
                    <span style={{ transitionDelay: "300ms" }}>n</span>
                </label>
            </div>
            <div>
                <button className='task-create-update'>{type === 'create' ? 'Create' : 'Update'}
                </button>
            </div>
        </form>
    )
}

export default Form