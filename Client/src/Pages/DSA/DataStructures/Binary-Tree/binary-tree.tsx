import PageHeader from "../../../../Components/PageTitle/page-title"


export default function BinaryTree() {
    return (
        <div>
            <PageHeader
                title = 'Binary Tree'
                subject = 'Data Structure'
            />
            <main>
                <section>
                    <header><h2>What is a Binary Tree</h2></header>
                    <p>
                        Similar to a <a target="_blank" href="/dsa/data-structure/trees">tree</a> data structure, a binary tree has a hierarchical structure, where each node has at most two child nodes. These child nodes are typically referred to as the <i>left</i> and <i>right</i> children.
                    </p>
                    <p>
                        <strong>Left</strong> being the smaller value compared to the parent node. 
                    </p>
                    <p>
                        <strong>Right</strong> being the larger value compared to the parent node.
                    </p>
                </section>
                <section>
                    <header><h2>Types of Binary Trees</h2></header>
                    <div>
                        <h3>Full Binary Tree</h3>
                        <p>
                            Each parent node in a binary tree has exactly two children, a left and a right, ensuring that no parent node is without a child.
                        </p>
                        <figure><img src="" alt="" /></figure>
                    </div>
                    <div>
                        <h3>Complete Binary Tree</h3>
                        <p>
                            A binary tree is considered complete if it is filled from left to right, with all levels fully populated except possibly the last. If there is any gap between the left and right side of the tree, it is not a complete binary tree.
                        </p>
                        <figure><img src="" alt="" /></figure>
                    </div>
                </section>
            </main>
        </div>
    )
}