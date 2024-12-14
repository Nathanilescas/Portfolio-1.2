import Footer_1 from "../../Components/Footers/footer-1";
import Headline from "../../Components/HeadLine/Headline-1/headline";
import Navigation_1 from "../../Components/Navbars/nav-1";
import Model1 from "../../Content/Landing/Model1/model-1";
import Category from "../../Content/Sections/Category/category";

import '../../Content/About-Me/about.css'


export default function SessionRecorder() {
    return (
        <div>
            <Navigation_1 
                isActive = "projects"
            />
            <Model1
                title={"Session Recorder"}
                header1={"why build it "}
                paragraph1={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}

                header2={"sdfklsdjlf"}
                paragraph2={"fIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}

                image={"https://puzzlemania-154aa.kxcdn.com/products/2024/puzzle-schmidt-1000-pieces-random-galaxy.webp"}
            />
            <div className="section-background">
                <section>
                    <Headline
                        headline = "Project Demo"
                    />

                </section>

                <section>

                    <Category
                        categoryElements ={
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


function SessionRecorderDemo() {
    return (
        
    )
}