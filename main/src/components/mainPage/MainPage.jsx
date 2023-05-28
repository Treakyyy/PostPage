import { useDispatch, useSelector } from 'react-redux'
import './MainPage.css'
import { useState, useEffect } from 'react'
import Burger from '../../UI/Burger/Burger'
import Pagination from '../../UI/Pagination'
import MainPageControls from './MainPageControls/MainPageControls'
import Post from './Post/Post'


const MainPage = () => {
    const dispatch = useDispatch()

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [customersPerPage] = useState(10)
  
  const customers = useSelector(state => state.customers.customers)
  


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
                <MainPageControls 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    selectedSort={selectedSort} 
                    sortPosts={sortPosts} 
                />
            {isLoader ? <div className='loader'>Loading...</div> :
                <>
                {filterPosts.map((post) => 
                   <Post post={post} />
                    )}
                </>}
                <Pagination customersPerPage={customersPerPage} totalCustomers={customers.length} paginate={paginate}/>
            </div>
        </div>
    )
}

export default MainPage