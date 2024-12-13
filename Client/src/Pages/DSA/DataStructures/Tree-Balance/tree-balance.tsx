import PageHeader from "../../../../../Components/PageTitle/page-title";


export default function TreeBalance() {
    return (
        <div>
            <PageHeader 
                title = "Tree Balancing"
                subject = "Data Structure"
            />

            <article>
                <main>
                    <section>
                        <h2>What is Tree Balancing?</h2>
                        <p>
                            Balancing a tree is essential to fully leverage the efficient runtime that a balanced tree data structure offers. When the tree is balanced, operations such as insertion, deletion, and searching can be performed in O(log n) time, ensuring optimal performance. 
                        </p>
                        <p>
                            However, if the tree becomes unbalanced, these operations can degrade to O(n), essentially turning the tree into a linked list, which significantly reduces efficiency.
                        </p>
                    </section>

                    <section>
                        <h2>Operations</h2>
                        <div>
                            <h3>Rotation</h3>
                            <p>
                                The tree rotation is a local operation that involves re-arranging the nodes of a tree in a way that restores balance without losing the fundamental properties of the binary tree. This happens when a side becomes too "heavy". There are two main types of rotation:
                            </p>
                            <ol>
                                <li>
                                    <h4>Right Rotation</h4>
                                </li>
                                <li>
                                    <h4>Left Rotation</h4>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h3>Heavy Sides</h3>
                            <p>
                                When a tree is heavy on one side, it is considered unbalanced. This definition of "heavy" differs depending on the type of self-balancing tree chosen for implementation (e.g., AVL tree, Red-Black tree). 
                            </p>
                            <p>
                                Using the Rotation operation in a these certain way will balance out your tree.
                            </p>
                            <ul>
                                <li>
                                    <h4>Right</h4>
                                    <ol>
                                        <li>
                                            Left child becomes the new root of the sub-tree
                                        </li>
                                        <li>
                                            Old root becomes the right child of the new root
                                        </li>
                                        <li>
                                            <strong>If</strong> the new root had a right child, then that child becomes the left child of the old root
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <h4>Left</h4>
                                    <ol>
                                        <li>
                                            Right child becomes the new root of the sub-tree
                                        </li>
                                        <li>
                                            Old root becomes the left child of the new root
                                        </li>
                                        <li>
                                            <strong>If</strong> the new root had a left child, then it becomes the right child of the old root
                                        </li>
                                    </ol>
                                </li>
                            </ul>
                            <div>
                                <h3>Example:</h3>
                                <figure><img src="" alt="" /></figure>
                            </div>
                        </div>
                    </section>
                </main>
            </article>
        </div>
    )
}