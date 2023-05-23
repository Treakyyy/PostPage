import { useDispatch, useSelector } from 'react-redux'
import './MainPage.css'
import { fetchComment } from '../../store/commentReducer'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'


const MainPage = () => {
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(true)
  
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

    return(
        <div>
            <Burger />
            <div className='containerContentApi'>
            {isLoader ? <div className='loader'>Loading...</div> :
                <>
                {customers.map((customer) => 
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
            </div>
        </div>
    )
}

export default MainPage