import useTodos from '@src/hooks/api-hooks/useTodos';
import { todoTable } from '@src/lib/db';
import { Todo } from '@src/types';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { useForm } from 'react-hook-form';

interface IProps {
  todo: Todo;
}

function TodoDetails(props: IProps) {
  const { todo } = props;

  const { watch, setValue } = useForm({
    values: { name: todo.name, description: todo.description ?? '' },
  });

  function saveTodo() {
    if (watch('name') === '') {
      setValue('name', 'Untitled');
    }
    todoTable.update(todo.id as number, { name: watch('name'), description: watch('description') });
  }

  return (
    <div className="flex flex-col gap-2">
      <ContentEditable
        html={watch('name')}
        onChange={(e) => setValue('name', e.target.value)}
        onBlur={saveTodo}
        className={classNames('text-2xl font-bold outline-none p-4')}
        spellCheck={false}
        onMouseLeave={saveTodo}
      />
      <ContentEditable
        html={watch('description')}
        onChange={(e) => setValue('description', e.target.value)}
        onBlur={saveTodo}
        spellCheck={false}
        className={classNames(
          'text-base outline-none min-h-[300px] max-h-[350px] overflow-y-scroll px-4 pb-4'
        )}
        onMouseLeave={saveTodo}
        placeholder="Some cool content goes here..."
      />
    </div>
  );
}

export default TodoDetails;
