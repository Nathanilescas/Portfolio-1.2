import './styles.css'

import Navigation_1 from '../../Components/Navbars/nav-1';
import Footer_1 from '../../Components/Footers/footer-1';


function MergeSort() {
    
    
    return (
        <div>
            <Navigation_1 isActive='blog'/>
                <BlogHeading heading="Merge Sort"/>
            <Footer_1 />
        </div>
    )
}

function BlogHeading(props:any) {
    return (
        <div>
            <article>
                <header><h1>{props.heading}</h1></header>
                    <main className='blog-section-info'>
                        <div>
                            <h2>Definition:</h2>
                            <p>
                            The Merge Sort algorithm is a <a href="">divide-and-conquer</a> algorithm that sorts 
                            an array by breaking it down into smaller arrays. These arrays are then built back up in the correct order to be sorted.
                            </p>
                        </div>
                        <div>
                            <h2>Time Complexity:</h2>
                            <ul>
                                <li><strong>Best Case:</strong>O(<i>n</i>log<i>n</i>)</li>
                                <li><strong>Average Case:</strong>O(<i>n</i>log<i>n</i>)</li>
                                <li><strong>Worst Case:</strong>O(<i>n</i>log<i>n</i>)</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Space Complexity:</h2>
                            <ul>
                                <li>O(<i>n</i>)</li>
                            </ul>
                        </div>
                    </main>

                    <section>
                        <header><h2>Pseudo Code (Step-by-Step)</h2></header>
                        <ol>
                            <li>
                                <h3>Start with a full array:</h3>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                            </li>
                            <li>
                                <h3>Divide the array into two halves</h3>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                            </li>
                            <li>
                                <h3>Repeat until you get to a sub-array that has a single element</h3>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                            </li>
                            <li>
                                <h3>Merge back together the sub-arrays in sorted order</h3>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                            </li>
                        </ol>
                    </section>
                    <section>
                        <header><h2>Merge Sort Implementation</h2></header>
                        <div>
                            <h3>Recursive</h3>
                            <pre>
                                <code className='code-box'>

                                </code>
                            </pre>
                        </div>

                    </section>
            </article>
        </div>
    )
}

export default MergeSort;