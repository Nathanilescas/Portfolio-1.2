import Footer_1 from "../../Components/Footers/footer-1";
import Headline from "../../Components/HeadLine/Headline-1/headline";
import Navigation_1 from "../../Components/Navbars/nav-1";
import Model_1 from "../../Content/Landing/Model-1/model-1";
import Categories from "../../Content/Sections/Category/category";

import '../../Content/About-Me/about.css'


export default function SessionRecorder() {
    return (
        <div>
            <Navigation_1 
                isActive = "projects"
            />
            <Model_1
                pageDescription={{ 
                    title:"Session Recorder",

                    header_1: "Why I built it?",
                    paragraph_1: "something something....",

                    header_2: "SomeOther reason...",
                    paragraph_2: "Something else",

                    image: "https://puzzlemania-154aa.kxcdn.com/products/2024/puzzle-schmidt-1000-pieces-random-galaxy.webp"
                 }}
            />
            <div className="section-background">
                <section>
                    <Headline
                        headline = "Project Demo"
                    />
                </section>

                <section>
                    <Categories
                        categoryElement ={
                            [
                                {
                                    name: "Sock.io",
                                    description: "fIt is a lodfdsfdsfdsfds fdsfsdfsd "
                                },
                                {
                                    name: "RR-Web",
                                    description: "This is a description"
                                }
                            ]
                        }
                    />
                </section>
            </div>


            <Footer_1/>
        </div>

    )
}


// function SessionRecorderDemo() {
//     return (
//         <div></div>
//     )
// }