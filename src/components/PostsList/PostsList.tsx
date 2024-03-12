import {FC, useCallback, MouseEvent, useState} from "react";
import {PostItem} from "../PostItem/PostItem";
import cls from './PostsList.module.scss';
import {IPost} from "../../types";
import {FullPost} from "../FullPost/FullPost";
import Pagination from "../Pagination/Pagination";

interface IPostsList {
  posts: IPost[] | null;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PostsList: FC<IPostsList> = ({posts, currentPage, setCurrentPage}) => {
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
  const totalPages = 10;

  const handlerPostClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
    const clickedId = e.currentTarget.dataset.postid;
    if (clickedId && posts) {
      const post = posts.find(post => post.id === Number(clickedId));
      setSelectedPost(post);
    }
  }, [posts])

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page)
  }, [setCurrentPage])

  const handlePostClose = useCallback(() => {
    setSelectedPost(null);
  }, [setSelectedPost]);

  if (!posts) {
    return <div className={cls.postList}>Посты отсутствуют</div>
  }

  return (
    <>
      {selectedPost
        ? <FullPost post={selectedPost} onClose={handlePostClose}/>
        : <>
            <ul className={cls.postList}>
              {posts.map(post => (
                <PostItem key={post.id} post={post} onClick={handlerPostClick}/>
              ))}
            </ul>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
      }

    </>
  )
}