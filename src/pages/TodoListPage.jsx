import TodoForm from '../components/TodoForm.jsx'
import TodoTable from '../components/TodoTable.jsx'
import TodoSearchForm from '../components/TodoSearchForm.jsx'


const TodoListPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-7">
      <span className='text-2xl col-span-full'>Список дел</span>
      <TodoForm />

      <TodoTable />
    </div>
  )
}

export default TodoListPage
