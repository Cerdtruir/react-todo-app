import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function InputTodo(props) {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        onChange={onChange}
        className='input-text'
        value={title}
        type='text'
        placeholder='Add Todo...'
      />
      <button className='input-submit'>
        <FaPlusCircle />
      </button>
    </form>
  );
}

export default InputTodo;
