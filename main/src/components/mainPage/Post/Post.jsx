import './Post.css'
import { useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { fetchComment } from '../../../store/commentReducer'
import { Link } from 'react-router-dom'





const Post = ({ post }) => {

    const comment = useSelector(state => state.comment.comment)

    const dispatch = useDispatch()
    
    const [isOpen, setIsOpen] = useState(false)
    
    const onCommentsClick = () => {
        if(!isOpen){
            dispatch(fetchComment())
        }
        setIsOpen(!isOpen)
    }


    return(
        <div className='content'>
            <div className='photoAndTitle'>
                <Link key={post.id} to={`/users/${post.id}`}><img className='photo' src="photo.jpg" alt="" /></Link>
                    {post.title}
                </div>
                <p className='bodyContent'>{post.body}</p>
                <div className='comment'>
                    <button className='btnComment' onClick={() => onCommentsClick()}>Комментарии</button>
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
    )
}

export default Post