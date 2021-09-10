import React from 'react';
function PagiNation(props) {
    let pages = [];
    for (let i = 0; i < props.totalPages; i++) {
        pages.push(i + 1);
    }
    return (
        <div className="d-flex justify-content-center dong-ho-page">
            {
                pages.map(
                    (page, index) => <button 
                    className={`btn text1 ${page === props.currentPage ? "btn-active" : ""}`} 
                    key={index} 
                    onClick={() => { props.changePage(page) }}
                    >
                        {page}
                        </button>)
            }
        </div>
    );
}

export default PagiNation; 