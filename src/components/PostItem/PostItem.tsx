import {FC, memo, MouseEvent} from "react";

import cls from './PostItem.module.scss';
import {IPost} from "../../types";

interface IPostItem {
  post: IPost | null;
  onClick: (e: MouseEvent<HTMLLIElement>) => void
}

export const PostItem: FC<IPostItem> = memo(({post, onClick}) => {
  if (!post) {
    return null;
  }
  return (
    <>
      {post &&
        <li
          className={cls.postItem}
          data-postid={post.id}
          onClick={onClick}
        >
          {post.id}. {post.title}
        </li>
      }
    </>
  )
})