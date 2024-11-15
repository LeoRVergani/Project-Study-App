# Study Tracker - README

## Descrição

O **Study Tracker** é um aplicativo simples desenvolvido em React Native que ajuda os usuários a acompanhar suas tarefas de estudo ao longo da semana. Ele permite que os usuários marquem as tarefas como concluídas e visualizem seu progresso de forma interativa.

## Funcionalidades

- Lista de tarefas diárias para estudo
- Marcação de tarefas como concluídas
- Exibição do progresso em forma de barra
- Interface amigável e responsiva

## Tecnologias Utilizadas

- **React Native**: Biblioteca para construir interfaces móveis.
- **react-native-progress**: Biblioteca para exibir barras de progresso.

## Estrutura do Código

### Importações

```javascript
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
```

Aqui, importamos os módulos necessários do React e do React Native. `useState` é um hook que permite gerenciar o estado do componente. Também importamos o componente `Progress` para exibir a barra de progresso.

### Definição das Tarefas

```javascript
const tasks = [
  { id: "1", day: "Monday", task: "Revisar conceitos básicos de Python.", completed: false },
  { id: "2", day: "Tuesday", task: "Estudar estruturas de dados.", completed: false },
  ...
];
```

Definimos uma lista de tarefas com um identificador (`id`), o dia da semana (`day`), a descrição da tarefa (`task`) e um booleano (`completed`) que indica se a tarefa foi concluída.

### Componente Principal

```javascript
export default function App() {
  const [taskList, setTaskList] = useState(tasks);
```

O componente `App` é a função principal que renderiza a interface. Usamos `useState` para inicializar `taskList` com a lista de tarefas definidas anteriormente.

### Função para Alternar Tarefas

```javascript
const toggleTask = (id) => {
  const updatedTasks = taskList.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  setTaskList(updatedTasks);
};
```

A função `toggleTask` altera o estado da tarefa quando ela é clicada. Se a tarefa for concluída, ela será marcada como não concluída e vice-versa.

### Cálculo do Progresso

```javascript
const calculateProgress = () => {
  const completedTasks = taskList.filter((task) => task.completed).length;
  return completedTasks / taskList.length;
};
```

A função `calculateProgress` calcula a porcentagem de tarefas concluídas dividindo o número de tarefas concluídas pelo total de tarefas.

### Renderização da Interface

```javascript
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
```

Na renderização, exibimos o título do aplicativo, a barra de progresso e uma lista das tarefas. Cada tarefa é um botão que pode ser clicado para alternar seu estado de conclusão.

### Estilos

```javascript
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
  ...
});
```

Os estilos são definidos usando `StyleSheet.create`, proporcionando uma aparência agradável e responsiva ao aplicativo.

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/study-tracker.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd study-tracker
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o aplicativo:
   ```bash
   npm start
   ```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Sinta-se à vontade para personalizar este README conforme necessário!
