import Headline from '../../Components/HeadLine/Headline-1/headline';

import './about.css'

function AboutMe() {
    return (
        <section className='section-background'>
            <Headline
                headline= "About Me"
            />
            <div className='section-container-adjacent'>
                <section>
                    <h2>Hello!</h2>
                    <p>
                        I'm a Full-stack Developer based out of vista california.
                        something...
                    </p>
                </section>
                <section >
                    <div className='section-container-skills'>
                        <h2>My Skills</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT</li>
                            <li>NODE JS</li>
                            <li>GITHUB</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                    <div className='section-container-skills'>
                        <h2>Basic Knowledge</h2>
                        <ul>
                            <li>C#</li>
                            <li>JAVA</li>
                            <li>POSTGRE SQL</li>
                        </ul>
                    </div>
                </section>
            </div>

        </section>
    )
}


export default AboutMe;