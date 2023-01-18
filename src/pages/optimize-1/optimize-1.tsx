import { memo, useCallback, useState, useMemo } from 'react';

import { CenteredLayout } from '~/components';

import { useRenderHighlight } from '~/utils';

import css from './optimize-1.module.scss';

type TodosData = {
  id: number,
  text: string,
  done: boolean
}

export interface TodoProps {
  item: TodosData;
  onClick: () => void;
}

const todosData: TodosData[] = [
  { id: 1, text: 'run a marathon', done: false },
  { id: 2, text: 'ride an elephant', done: false },
  { id: 3, text: 'swim with a fish', done: false },
];


const Todo: React.FC<TodoProps> = memo(({ item, onClick }) => {
  const ref = useRenderHighlight(css.render);
  return (
    <li ref={ref} onClick={onClick} className={css.listItem}>
      {item.done ? '[x]' : '[ ]'} {item.text}
    </li>
  );
}, (prevProps, nextProps) => {
  if (prevProps.item.done !== nextProps.item.done) {
    return false
  }
  return true
});

const Optimize1: React.FC = () => {
  const [todos, setTodos] = useState(todosData);

  const renderTodo = useCallback((item?: TodosData) => (
    <Todo
      key={item.id}
      item={item}
      onClick={() => handleTodoClick(item.id)}
    />
  ), [todos])

  const handleTodoClick = useCallback(
    (id: number) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
    },
    [todos],
  );
  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">It re-renders all items! =\</div>
      <div>We need to fix that</div>
      <ul>
        {todosData.map((item) => renderTodo(todos.find(({ id }) => item.id === id)))}
      </ul>
    </CenteredLayout>
  );
};

export default Optimize1;
