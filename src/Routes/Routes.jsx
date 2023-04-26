import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Page/Home/Home/Home";
import Category from "../Page/Home/Category/Category";
import NewsLayout from "../layout/newsLayout";
import News from "../Page/News/News/News";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Category></Category>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },

    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;