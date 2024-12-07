
import './styles.css'
import profileImage from '../../../../public/Images/profile.jpg'

function Home() {
    return (
        <div id='home'>
            <main>
                <header><h1>Full-Stack Developer</h1></header>
                <h2>Nathan Ilescas</h2>
                <figure>
                    <img src={profileImage} alt="Profile Image" />
                </figure>
            </main>
            <span>\/</span>
        </div>
    )
}


export default Home;