import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

// Main component for the task manager
const TaskManager = () => {
    // State to hold the list of tasks
    const [tasks, setTasks] = useState([]);
    // State to hold the current task title input
    const [taskTitle, setTaskTitle] = useState('');

    // Add a new task
    const addTask = () => {
        const newTask = {
            id: Date.now().toString(), // Unique ID for the task
            title: taskTitle, // Title from the input field
            completed: false, // Default to not completed
        };
        setTasks([...tasks, newTask]); // Add the new task to the tasks array
        setTaskTitle(''); // Clear the input field after adding the task
    };

    // Toggle the completion status of a task
    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // delete a task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // List each task item
    const renderTask = ({ item }) => (
        <View style={styles.taskContainer}>
            <Text style={styles.taskText}>
                {item.title} - {item.completed ? 'Completed' : 'Incomplete'}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)} style={styles.statusButton}>
                    <Text style={styles.statusButtonText}>Status</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>To Do List</Text>
            <FlatList
                data={tasks} // Data for the list
                renderItem={renderTask} // Function to render each item
                keyExtractor={item => item.id} // Unique key for each item
            />
            <TextInput
                style={styles.input}
                placeholder="Enter task details"
                placeholderTextColor="#ccc"
                value={taskTitle} // Value of the input field
                onChangeText={setTaskTitle} // Update state on text change
            />
            <TouchableOpacity onPress={addTask} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TaskManager;
