import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/Home";
import AddBook from './../features/books/AddBook';
import ShowBooks from './../features/books/ShowBooks';
import Error from "../pages/Error";
import EditBook from "../features/books/EditBook";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Main/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/add-book",
                element : <AddBook/>
            },
            {
                path : "/show-books",
                element : <ShowBooks/>
            },
            {
                path : "/edit-book",
                element : <EditBook/>
            },
            {
                path : "*",
                element : <Error/>
            }
        ]

    }
])