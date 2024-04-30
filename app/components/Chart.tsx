'use client'
import React, { useState, useEffect } from "react";
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CategoryScale, ChartData, ChartOptions, registerables } from "chart.js";
// import { Chart as registerables } from 'chart.js/auto';
import 'chartjs-adapter-date-fns'; // Import the date adapter
import { Line } from 'react-chartjs-2';
import { Button, Input } from "@nextui-org/react";

// Define data for Chart.js
const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Tasks Completed',
            data: [0, 0, 0, 0, 0, 0, 0], // Placeholder data
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

ChartJS.register(...registerables);


interface Todo {
    id: number;
    text: string;
    completed: boolean;
    date: string; // Adding date property to Todo
}


interface LineGraphProps {
    data: number[];
}

interface Props {
    todos: { date: string; count: number }[];
}

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);



const ChartComponent = () => {



    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoText, setTodoText] = useState<string>('');
    const [completionData, setCompletionData] = useState<number[]>([]);

    const addTodo = () => {
        if (todoText.trim() !== '') {
            const newTodo: Todo = {
                id: Date.now(),
                text: todoText,
                completed: false,
                date: new Date().toISOString().split('T')[0], // Set current date
            };
            setTodos([...todos, newTodo]);
            setTodoText('');
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Count completed todos for each day
    const countCompletedTodosPerDay = () => {
        const counts: { [date: string]: number } = {};
        todos.forEach(todo => {
            if (todo.completed) {
                counts[todo.date] = (counts[todo.date] || 0) + 1;
            }
        });
        return counts;
    };

    const todoChartData = {
        labels: ['Completed', 'Incomplete'],
        datasets: [
            {
                label: 'Todo List Statistics',
                data: [
                    todos.filter(todo => todo.completed).length,
                    todos.filter(todo => !todo.completed).length,
                ],
                backgroundColor: ['#36A2EB', '#FFCE56'],
            },
        ],
    };




    // Prepare data for chart
    const completedTodosPerDay = countCompletedTodosPerDay();


    const chartData = {
        labels: Array.from({ length: completionData.length }, (_, i) => (i + 1).toString()),
        datasets: [
            {
                label: 'Task Completion',
                data: completionData,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Todo Count',
                data: completionData.map((todo: any) => todo.count),
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };




    useEffect(() => {
        // Count completed todos for each day whenever todos change
        const counts: number[] = [];
        for (let date in completedTodosPerDay) {
            counts.push(completedTodosPerDay[date]);
        }
        setCompletionData(counts);
    }, [todos, completedTodosPerDay]);


    return (
        <div>
            <div className="flex justify-center w-full gap-3">
                <Input
                    className="w-[50%]"
                    value={todoText}
                    onChange={e => setTodoText(e.target.value)}

                    type="text"
                    label="todo"
                />
                <Button onClick={addTodo} color="primary">
                    Add
                </Button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <div style={{ height: "300px", width: "600px" }}>
                <Bar data={todoChartData} options={options} />
                <div style={{ width: '400px', margin: 'auto' }}>
                    <Doughnut updateMode="none" className=" delay-75 transition-all ease-in" data={todoChartData} />
                </div>
            </div>
        </div>
    )
}

export default ChartComponent
