import { Link, useParams } from 'react-router-dom'
import Burger from '../../UI/Burger/Burger'
import './Users.css'
import { useState, useEffect } from 'react'
import Loader from '../../UI/icons/Loader'

const Users = () => {
    const {id} = useParams()
    const [isLoader, setIsLoader] = useState(true)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
       setTimeout(() => {
         setIsLoader(false);
     }, 500);
   }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
   }, [id])


    return(
        <div>
            <Burger />
            {isLoader ? <div className='loader'><Loader /></div> :
            <div className='userContainer'>
                {posts && (
                <div className='userContent'>
                    <p className='userTitle'>Пользователь: {posts.id}</p>
                    <span className='userInfo'>Посты пользователя:</span>
                    <div className='userPost'>{posts.body}</div>
                    <Link to='/'><button className='btnUser'>Назад</button></Link>
                </div>)}
            </div>}
        </div>
    )
}

export default Users