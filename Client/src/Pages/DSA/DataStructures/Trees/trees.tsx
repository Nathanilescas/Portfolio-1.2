import PageHeader from "../../../../Components/PageTitle/page-title";

function Tree() {
    return (
        <div>
            <PageHeader
                title = "TREE"
                subject = "Data Structure"
            />
            <p>Updated: <time>12/9/20024</time></p>

            <main>
                <div>
                    <h2>what is a Tree Data Structure?</h2>
                    <p>
                        A tree is a hierarchical data structure made up of nodes connected by edges. Each node contains a value, and the nodes are connected in a way that forms a parent-child relationship. The top node is called the root, and each node can have zero or more children. 
                    </p>
                    <p>
                        This structure is different from a linked list, as it has multiple branches instead of a single line. Unlike linear data structures like linked lists, a tree is non-linear due to its arrangement. It consists of multiple levels, creating a hierarchical structure that resembles a tree, which is where it gets its name.
                    </p>
                </div>


                <div>
                    <h2>Terms to Know:</h2>
                    <ul>
                        <li><button >Root</button></li>
                        <li><button >Edge</button></li>
                        <li><button >Siblings</button></li>
                        <li><button >Leaf</button></li>
                        <li><button >Parent Node</button></li>
                        <li><button>Child Node</button></li>
                        <li><button>Sub-Tree</button></li>
                        <li><button>Levels or Depth</button></li>
                    </ul>

                    <div>
                        <header><h3>{ /*Term Header*/ }</h3></header>
                        <figure><img src="" alt="" /></figure>
                        <p>
                            {/* Definition */}
                        </p>
                    </div>
                </div>
            </main>
            <section>
                <div>
                    <h2>Types of Trees</h2>
                    <ul>
                        <li><a href="/dsa/data-structure/trees/binary-tree">Binary Tree</a></li>
                        <li><a href="">AVL Tree</a></li>
                    </ul>
                </div>
            </section>
        </div>


    )
}




export default Tree;