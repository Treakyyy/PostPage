import { Link, useParams } from 'react-router-dom'
import Burger from '../mainPage/Burger'
import './Users.css'
import { useState, useEffect } from 'react'

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
            {isLoader ? <div className='loader'>Loading...</div> :
            <div className='containerUsers'>
                {posts && (
                <div className='contentUsers'>
                    <p>Пользователь: {posts.id}</p>
                    <span>Посты пользователя:</span>
                    <div className='postUser'>{posts.body}</div>
                    <Link to='/'><button className='btnUser'>Назад</button></Link>
                </div>)}
            </div>}
        </div>
    )
}

export default Users