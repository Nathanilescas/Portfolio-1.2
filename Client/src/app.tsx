import { 
    createBrowserRouter, 
    //createRoutesFromElements,
    RouterProvider,
    // Route

 } from 'react-router-dom';

import Home from './Pages/Home/home';
import Tree from './Pages/DSA/DataStructures/Trees/trees';
import BinaryTree from './Pages/DSA/DataStructures/Binary-Tree/binary-tree';
import Heap from './Pages/DSA/DataStructures/Heap/heap';
import SessionRecorder from './Pages/SessionRecorder/session-recorder';

/* OTHER WAY OF ROUTING */
// const routerDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path='/' element={<Home></Home>} />
//         <Route path='/merge-sort' element={<h1>Hello World</h1>} />
//     </Route>
// )
// const router = createBrowserRouter(routerDefinitions)



const router = createBrowserRouter([
    { path: '/', element: <Home></Home>},
    { path: '/projects/session-recorder', element: <SessionRecorder></SessionRecorder>},


    { path: '/dsa/data-structure/trees', element: <Tree></Tree>},
    { path: '/dsa/data-structure/trees/binary-tree', element: <BinaryTree></BinaryTree>},
    { path: '/dsa/data-structure/heap', element: <Heap></Heap>}
])


function IlescasApp() {
    return <RouterProvider router={router}/>
}


export default IlescasApp