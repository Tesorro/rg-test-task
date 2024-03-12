import './App.module.scss'
import {PostsList} from "../PostsList/PostsList";
import {useEffect, useState} from "react";
import {IPost} from "../../types";
import axios from "axios";
import cls from './App.module.scss';

function App() {
  const [postsList, setPostsList] = useState<IPost[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`).then(res => setPostsList(res.data))
  }, [currentPage]);

  return (
    <div className={cls.container}>
      <header>
        <h1 className={cls.headerTitle}>Список постов</h1>
      </header>
      <main>
        <PostsList
          posts={postsList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
      <footer className={cls.footer}>
        Ⓒ Tesorro {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App;
