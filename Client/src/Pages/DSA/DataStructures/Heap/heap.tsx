import PageHeader from "../../../../Components/PageTitle/page-title"

export default function Heap() {
    return (
        <main>
            <PageHeader 
                title = "Head"
                subject = "Data Structure"
            />

            <article>
                <h2>What is a Heap?</h2>
                <p>
                    A heap is a binary tree-based data structure, typically implemented using an array. It adheres to specific properties that arrange elements in a hierarchical tree-like structure. The heap uses formulas to efficiently store and navigate between elements, much like how a traditional binary-tree  accesses its nodes. In essence, the heap combines the fast access speeds of an array with the organizational structure of a binary tree, offering both efficiency and order.
                </p>
                <p>
                    * Note - they are perfect to use in as Priority Queue
                </p>
                
                <section>
                    <h3>Traversal Formulas</h3>
                    <p>
                        *i being the current node
                    </p>
                    <ol>
                        <li>
                            <h4>Parent Node</h4>
                            <p>
                                parent(i) = [ (i-1) /2 ]
                            </p>
                            <figure><img src="" alt="" /></figure>
                        </li>
                        <li>
                            <h4>Left Child</h4>
                            <p>
                                leftChild(i) = (2 * i) + 1
                            </p>
                            <figure><img src="" alt="" /></figure>
                        </li>
                        <li>
                            <h4>Right Child</h4>
                            <p>
                                rightChild(i) = (2 * i) + 2
                            </p>
                            <figure><img src="" alt="" /></figure>
                        </li>
                        <li>
                            <h4>Root</h4>
                            <p>
                                root = 0 
                            </p>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2>Types of Heaps</h2>
                    <ol>
                        <li>
                            <h3>Min Heap</h3>
                            <p>*Small value heap</p>
                            <p>
                                A min-heap is a data structure that follows the following properties:
                            </p>
                            <ul>
                                <li>Is a Complete Binary Tree</li>
                                <li>
                                    The root node must be the small value in the Tree
                                </li>
                                <li>
                                    The parent node must be a smaller value than it's children nodes
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Max Heap</h3>
                            <p>*larger value heap</p>
                            <p>
                                A max-heap is a data structure that follows the following properties:
                            </p>
                            <ul>
                                <li>Is a Complete Binary Tree</li>
                                <li>
                                    The root node must be the largest value in the Tree
                                </li>
                                <li>
                                    The parent node must be a larger value than it's children nodes
                                </li>
                            </ul>
                        </li>
                    </ol>
                </section>
            </article>
        </main>
    )
}