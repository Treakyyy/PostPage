import './About.css'
import Burger from '../../UI/Burger/Burger'
import { useState, useEffect } from 'react'


const About = () => {

    const [isLoader, setIsLoader] = useState(true)

    useEffect(() => {
       setTimeout(() => {
         setIsLoader(false)
     }, 500)
   }, [])


    return(
        <div>
            <Burger/>
            {isLoader ? <div className='loader'>Loading...</div> :
            <div className='containerAbout'>
                <div className='contentAbout'>
                    <header>
                        Всем привет я Суворов Михаил
                    </header>
                    <div className='aboutMeContainer'>
                        <div className='aboutMe'>
                            <div>
                                О себе:
                            </div>
                            Общительный и харизматичный, умею находить общий язык с людьми, а также я любознательный и спортивный
                        </div>
                    <br />
                        <p>Профессиональные навыки: </p>
                        Начал изучать Web разработку в 2021
                        <br />
                        Что знаю и люблю использовать: HTML, CSS, JS (es6+), React, npm, git, React hooks, Redux
                        <br />
                        Что знаю недавно и в чем заинтересован развиваться: Typescript, Sass/Scss, ООП
                        <br />
                        Также имеется опыт: Адаптивной верстки
                        <br />
                        Люблю изучать новое, создавать красивые интерфейсы и рефакторить код!
                    </div>
                    <div className='progress'>
                        <div>
                            HTML: <progress max='100' value='100'/>
                        </div>
                        <div>
                            CSS: <progress max='100' value='80'/>
                        </div>
                        <div>
                            JavaScript: <progress max='100' value='70'/>
                        </div>
                        <div>
                            React: <progress max='100' value='60'/>
                        </div>
                        <div>
                            Redux: <progress max='100' value='60'/>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default About