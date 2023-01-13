import './Pagination.css'

interface IPaginationProps {
  page: number
  limit: number
  length?: number
  onChangePage: (changePage: number) => void
}

export const Pagination: React.FC<IPaginationProps> = ({
  page,
  limit,
  length = limit,
  onChangePage
}) => {
  const lastPage = Math.ceil(length / limit)

  const isActive = (p: number) => (p === page ? 'pagination--active' : '')

  const pages = Array.from(
    { length: lastPage <= 5 ? lastPage : 5 },
    (_, index) => (page <= 3 ? index + 1 : index + page - 2)
  )

  return (
    <div className="pagination">
      <button
        className="pagination-arrow"
        disabled={page === 1}
        onClick={() => onChangePage(page - 1)}
      ></button>

      {page > 3 && <span>...</span>}

      {pages.map(
        (p, key) =>
          p <= lastPage && (
            <button
              key={key}
              onClick={() => onChangePage(p)}
              className={`pagination-button ${isActive(p)}`}
            >
              {p}
            </button>
          )
      )}

      {(lastPage > 5 || (page > 3 && page <= lastPage - 3)) &&
        page < lastPage - 3 && <span>...</span>}

      <button
        className="pagination-arrow"
        disabled={page === lastPage}
        onClick={() => onChangePage(page + 1)}
      ></button>
    </div>
  )
}
