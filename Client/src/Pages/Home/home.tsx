import Navigation_1 from "../../Components/Navbars/nav-1.tsx"
import AboutMe from "../../Content/About-Me/about.tsx"
import Footer_1 from "../../Components/Footers/footer-1.tsx"
import Landing from "../../Content/Landing/Home/landing.tsx"
import Card from "../../Components/Card/card.tsx"
import SlidingCards from "../../Components/Carasel-Containers/Sliding-Cards/sliding-cards.jsx"

function Home() {
    return (
        <div>
            <Navigation_1 isActive='home'></Navigation_1>
                <Landing/>
                <AboutMe/>
                <SlidingCards></SlidingCards>
            <Footer_1/>
        </div>
    )
}

export default Home;