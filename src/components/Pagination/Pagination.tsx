import {FC} from "react";
import cls from './Pagination.module.scss';

interface IPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<IPagination> = ({currentPage, totalPages, onPageChange}) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={cls.pagination}>
      {pages.map(page => (
        <button
          key={page}
          className={cls.pageNum}
          onClick={() => onPageChange(page)}
          style={{
            fontWeight: currentPage === page ? 'bold' : 'normal',
            color: currentPage === page ? 'inherit' : '#9b9b9b'
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
