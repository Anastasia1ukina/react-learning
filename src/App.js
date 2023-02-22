import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css'
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript', body: 'Description' },
    { id: 3, title: 'Javascript', body: 'Description' },
  ])

  const [title, setTitle] = useState('Hello')
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault()
  }

  return (
    <div className='App'>
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type='text'
          placeholder='Название поста'
        />
        {/* Неуправляемый\Неконтролируемый компонент */}
        <MyInput
          ref={bodyInputRef}
          type='text'
          placeholder='Описание поста'
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Посты про JS' />

    </div>
  );
}

export default App;
