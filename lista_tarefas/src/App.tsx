import { useState, useEffect, useRef, useMemo, useCallback } from 'react'

function App() {
  //usado para mudar o foco do elmento
  const inputRef = useRef<HTMLInputElement>(null);

  //controlar primeira renderizacao do useEffect
  const firstRender = useRef(true);

  //controla os estados
  const [input, setInput] = useState('');
  const [editTask, setEditTask] = useState({
    enabled: false,
    task: ''
  })
  const [tasks, setTasks] = useState<string[]>([]);

  // é uma mistura do initState do flutter com um blocListenner
  // toma uma ação assim que o componente é buildado, e caso
  // passe um argumento, toma outra ação caso o estado do 
  // componente mude
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("@cursoreact")
    if (tarefasSalvas) {
      setTasks(JSON.parse(tarefasSalvas))
    }
  }, []) //passar variaveis que serao observadas, tipo um blocListenner

  useEffect(() => {
    //caso seja a primeira renderização, saia da função
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("@cursoreact", JSON.stringify(tasks))

  }, [tasks]);

  // evita a perca de performace, renderizando apenas quando a
  // lista de tarefas sofrer uma varição
  const totalTarefas = useMemo(() => {
    return tasks.length
  }, [tasks])

  //handle register evita com que uma função sofra realocamento
  //de memoria ao renderizar novamente o componente
  //pr exemplo, se eu excluir uma tarefa, essa função abaixo também
  //sera executada, o que não é necessario, uma vez que nao foi usada
  const handleRegister = useCallback(() => {
     if (!input) {
      alert("preencha o nome da sua tarefa");
      return;
    }

    if (editTask.enabled) {
      handleSaveEdit();
      return;
    }

    setTasks([...tasks, input]);
    setInput('');
  },[input, tasks])

  function handleSaveEdit() {
    const findIndexTask = tasks.findIndex(task => task == editTask.task)
    const allTasks = [...tasks];

    allTasks[findIndexTask] = input;
    setTasks(allTasks)

    setEditTask({
      enabled: false,
      task: ''
    })
    setInput("")
  }

  function handleDelete(item: string) {
    const removeTask = tasks.filter(task => task !== item)
    setTasks(removeTask)
  }

  function handleEdit(item: string) {
    inputRef.current?.focus();

    setInput(item)
    setEditTask({
      enabled: true,
      task: item
    })

  }

  return (
    <div>
      <h1>Lista de tarefas</h1>

      <input
        placeholder='Digite o nome da tarefa'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleRegister}>
        {editTask.enabled ? 'Atualizar Tarefa' : 'Adicionar tarefa'}
      </button>

      <hr />

      <strong>Voce têm {totalTarefas} tarefas</strong>
      <br /><br />

      {tasks.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelete(item)}>Excluir</button>
        </section>
      ))}
    </div>
  )
}

export default App
