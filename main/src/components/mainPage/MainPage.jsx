import { useDispatch, useSelector } from 'react-redux'
import './MainPage.css'
import { fetchComment } from '../../store/commentReducer'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'
import Select from '../../UI/Select'
import Pagination from '../../UI/Pagination'


const MainPage = () => {
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(true)
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [customersPerPage] = useState(10)
  
  const customers = useSelector(state => state.customers.customers)
  const comment = useSelector(state => state.comment.comment)

    const onCommentsClick = () => {
        if(isOpen){
            dispatch(fetchComment())
        }else{
            setIsOpen(!isOpen)
        }
    }

    const [isLoader, setIsLoader] = useState(true)

    useEffect(() => {
       setTimeout(() => {
         setIsLoader(false)
     }, 500)
   }, [])

   const sortPosts = (sort) => {
        setSelectedSort(...customers.sort((a, b) => a[sort].localeCompare(b[sort])))
   }
   const lastCustomersPage = currentPage * customersPerPage
   const firstCustomersPage = lastCustomersPage - customersPerPage

   const filterPosts = customers.slice(firstCustomersPage, lastCustomersPage).filter(customer => {
        return customer.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
   })



   const paginate = (pageNumber) => {
       setCurrentPage(pageNumber)  
    }


    return(
        <div>
            <Burger />
            <div className='containerContentApi'>
                <div>
                    <input 
                        type="text" 
                        placeholder='Поиск...' 
                        value={searchQuery} 
                        onChange={e => setSearchQuery(e.target.value)} />
                        <label onClick={() => setSearchQuery('')}><img className='close' src="close.jpg" alt="" /></label>
                </div>
                <div className='select'>
                    <Select 
                        value={selectedSort} 
                        onChange={sortPosts} 
                        defaultValue='Сортировка' 
                        options={[{value: 'title', name: 'По заголовку'}]} />
                </div>
            {isLoader ? <div className='loader'>Loading...</div> :
                <>
                {filterPosts.map((customer) => 
                    <div key={customer.id} className='content'>
                        <div className='photoAndTitle'>
                        <Link key={customer.id} to={`/users/${customer.id}`}><img className='photo' src="photo.jpg" alt="" /></Link>
                            {customer.title}
                        </div>
                        <p className='bodyContent'>{customer.body}</p>
                        <div className='comment'>
                            <button className='btnComment' onDoubleClick={() => setIsOpen(false)} onClick={() => onCommentsClick()}>Комментарии</button>
                        </div>
                        {isOpen &&
                        <div className='containerComment'>
                            {comment.map((comments) =>
                                <div key={comments.id} className='email'>
                                    <div>
                                        {comments.email}
                                    </div>
                                    <div>
                                        {comments.body}
                                    </div>
                                </div>
                            )}
                        </div>}
                    </div>
                    )}
                </>}
                <Pagination customersPerPage={customersPerPage} totalCustomers={customers.length} paginate={paginate}/>
            </div>
        </div>
    )
}

export default MainPage