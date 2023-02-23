import { CalendarIcon } from '@src/assets/icons';
import Datepicker from '@src/components/atoms/date-picker';
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
    values: { name: todo.name, description: todo.description ?? '', dueDate: todo?.dueDate },
  });

  function saveTodo() {
    if (watch('name') === '') {
      setValue('name', 'Untitled');
    }
    todoTable.update(todo.id as number, {
      name: watch('name'),
      description: watch('description'),
      dueDate: watch('dueDate'),
    });
  }

  return (
    <div>
      <ContentEditable
        html={watch('name')}
        onChange={(e) => setValue('name', e.target.value)}
        onBlur={saveTodo}
        className={classNames('text-2xl font-bold outline-none p-4')}
        spellCheck={false}
        onMouseLeave={saveTodo}
        placeholder="Grab a cup off coffee..."
      />
      <div className="grid grid-cols-12 mx-4 mb-4 border-b pb-4">
        <div className="col-span-4 paper flex gap-2">
          <CalendarIcon size={16} /> Due Date
        </div>
        <div className="col-span-8 paper">
          <Datepicker
            val={watch('dueDate')}
            setVal={(e) => {
              if (e) {
                setValue('dueDate', e);
              }
            }}
            onBlur={saveTodo}
            minDate={new Date()}
            placeholderText="Empty"
          />
        </div>
      </div>
      <ContentEditable
        html={watch('description')}
        onChange={(e) => setValue('description', e.target.value)}
        onBlur={saveTodo}
        spellCheck={false}
        className={classNames(
          'text-base outline-none min-h-[300px] max-h-[550px] overflow-y-scroll mx-4 mb-4'
        )}
        onMouseLeave={saveTodo}
        placeholder="Some cool content goes here..."
      />
    </div>
  );
}

export default TodoDetails;
