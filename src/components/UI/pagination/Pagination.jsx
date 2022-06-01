import React from 'react';
import {usePagination} from "../../../hooks/usePagination";
import './Pagination.css';

const Pagination = ({totalPages, page, setPage}) => {
    let pagesArray = usePagination(totalPages)

    return (
        <div className="page_wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => setPage(p)}
                    key={p}
                    className={page === p ? 'page page_current' : 'page'}>
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;