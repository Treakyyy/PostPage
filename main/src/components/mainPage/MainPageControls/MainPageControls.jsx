import Select from '../../../UI/Select'
import './MainPageControls.css'
import CloseIcon from '../../../UI/icons/CloseIcon'

const MainPageControls = ({ searchQuery, setSearchQuery, selectedSort, sortPosts }) => {
    return(
        <div className='controlContainer'>
            <div className='controlInput'>
                <input 
                    className='input'
                    type="text" 
                    placeholder='Поиск...' 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} />
                    <label onClick={() => setSearchQuery('')}><CloseIcon/></label>
            </div>
            <div className='select'>
                <Select 
                    value={selectedSort} 
                    onChange={sortPosts} 
                    defaultValue='Сортировка' 
                    options={[{value: 'title', name: 'По заголовку'}]} />
            </div>
        </div>
    )
}

export default MainPageControls