import './Pagination.css'

const Pagination = ({ customersPerPage, totalCustomers, paginate }) => {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div>
            <ul className='listNumber'>
                {pageNumbers.map(number => (
                    <li className='listNumbers' key={number}>
                        <span className='numbers' onClick={() => paginate(number)}>{number}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination