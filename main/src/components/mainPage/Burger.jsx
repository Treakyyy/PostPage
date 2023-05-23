import { useState, useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { fetchCustomers } from '../../store/customerReducer' 
import './Burger.css'
import { Link } from 'react-router-dom'


const Burger = () => {

    const dispatch = useDispatch()
    
    const [isLoader, setIsLoader] = useState(true)

     useEffect(() => {
        setTimeout(() => {
          setIsLoader(false)
      }, 500)
    }, [])

    return(
        <div className='containerMenu'>
            <header className='header'>
                    <nav className='nav'>
                        {isLoader ? <div>Loading...</div> :
                        <ul>
                        <Link to='/posts'>
                            <li><button className='btnBurger' onClick={() => dispatch(fetchCustomers())}>Посты</button></li>
                        </Link> 
                        <Link to='/about'>
                            <li><button className='btnBurger'>Обо мне</button></li>
                        </Link>    
                        </ul>}
                    </nav>
                    <div className="burger">
                        <span></span>
                    </div>
                </header>
        </div>
    )
}

export default Burger