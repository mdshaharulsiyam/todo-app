import React from 'react';

interface PaginationProps {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
}

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }: PaginationProps) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (

        <div className='flex justify-center items-center w-full gap-2 mt-10'>
            {pageNumbers.map((number: number) => (
                <button key={number} onClick={() => paginate(number)} className={`bg-[#34B4D4] transition-all  hover:bg-[#2c94ad] hover:scale-105 active:scale-95 p-3 ${currentPage===number?'bg-[#2c94ad] text-white font-bold':''} rounded-md py-1`}>
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
