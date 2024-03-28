import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, paginate, sampleData, rowsPerPage }) => {
    const totalPages = Math.ceil(sampleData.length / rowsPerPage);

    const generatePaginationItems = () => {
        const paginationItems = [];
        const totalPages = Math.ceil(sampleData.length / rowsPerPage);
    
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                paginationItems.push(
                    <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                        <button className="page-link li_button rounded-3 btn" onClick={() => paginate(i)}>{i}</button>
                    </li>
                );
            }
        } else {
            let startPage = Math.max(1, currentPage - 1);
            let endPage = Math.min(totalPages, currentPage + 1);
    
            if (currentPage <= 2) {
                endPage = 3;
            } else if (currentPage >= totalPages - 1) {
                startPage = totalPages - 2;
            }
    
            if (startPage !== 1) {
                paginationItems.push(
                    <li key="1" className={`page-item`}>
                        <button className="page-link li_button rounded-3 btn" onClick={() => paginate(1)}>1</button>
                    </li>
                );
                paginationItems.push(
                    <li key="dots1" className="page-item disabled">
                        <span className="page-link li_button rounded-3 btn">&hellip;</span>
                    </li>
                );
            }
    
            for (let i = startPage; i <= endPage; i++) {
                paginationItems.push(
                    <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                        <button className="page-link li_button rounded-3 btn" onClick={() => paginate(i)}>{i}</button>
                    </li>
                );
            }
    
            if (endPage !== totalPages) {
                paginationItems.push(
                    <li key="dots2" className="page-item disabled">
                        <span className="page-link li_button rounded-3 btn">&hellip;</span>
                    </li>
                );
                paginationItems.push(
                    <li key={totalPages} className={`page-item`}>
                        <button className="page-link li_button rounded-3 btn" onClick={() => paginate(totalPages)}>{totalPages}</button>
                    </li>
                );
            }
        }
    
        return paginationItems;
    };

    return (
        <nav aria-label="Table_Pagination" className='Table_Pagination'>
            <ul className="pagination justify-content-end">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link li_button rounded-3 btn" onClick={() => paginate(currentPage - 1)}>&lt;</button>
                </li>
                {generatePaginationItems()}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link li_button rounded-3 btn" onClick={() => paginate(currentPage + 1)}>&gt;</button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
