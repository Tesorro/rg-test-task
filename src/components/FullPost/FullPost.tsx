import {FC} from "react";
import {IPost} from "../../types";
import cls from './FullPost.module.scss';

interface IFullPost {
  post: IPost | null;
  onClose: () => void;
}

export const FullPost: FC<IFullPost> = ({post, onClose}) => {
  if (!post) {
    return null;
  }
  const {body, userId, title} = post;

  return (
    <article className={cls.fullPost}>
      <h3 className={cls.title}>{title}</h3>
      <section>
        <p className={cls.body}>{body}</p>
      </section>
      <p className={cls.userId}>ID пользователя: {userId}</p>
      <button className={cls.button} onClick={onClose}>Назад</button>
    </article>
  )
}