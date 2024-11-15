import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

const tasks = [
  { id: "1", day: "Monday", task: "Revisar conceitos básicos de Python.", completed: false },
  { id: "2", day: "Tuesday", task: "Estudar estruturas de dados.", completed: false },
  { id: "3", day: "Wednesday", task: "Praticar exercícios no HackerRank.", completed: false },
  { id: "4", day: "Thursday", task: "Aprender manipulação de arquivos e exceções.", completed: false },
  { id: "5", day: "Friday", task: "Criar um script simples (ex.: gerador de senhas).", completed: false },
  { id: "6", day: "Saturday", task: "Reforçar conceitos com mini-projetos.", completed: false },
  { id: "7", day: "Sunday", task: "Revisar e anotar dúvidas.", completed: false },
];

export default function App() {
  const [taskList, setTaskList] = useState(tasks);

  const toggleTask = (id) => {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  };

  const calculateProgress = () => {
    const completedTasks = taskList.filter((task) => task.completed).length;
    return completedTasks / taskList.length;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Study Tracker</Text>
      <Progress.Bar 
        progress={calculateProgress()} 
        width={300} 
        color="#4caf50" 
        style={styles.progressBar} 
      />
      <Text style={styles.progressText}>
        {Math.round(calculateProgress() * 100)}% Completed
      </Text>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.task, item.completed && styles.taskCompleted]}
            onPress={() => toggleTask(item.id)}
          >
            <Text style={[styles.taskText, item.completed && styles.textCompleted]}>
              {item.day}: {item.task}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  progressBar: {
    marginBottom: 10,
  },
  progressText: {
    fontSize: 18,
    marginBottom: 20,
  },
  task: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    marginVertical: 5,
    width: "100%",
    elevation: 3,
  },
  taskCompleted: {
    backgroundColor: "#dcedc8",
  },
  taskText: {
    fontSize: 16,
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: "#4caf50",
  },
});

