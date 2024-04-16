import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import NotFound from "../Components/NotFound";
import TodoList from "../Components/TodoList";
import CompletedList from "../Components/CompletedList";
import UncompletedList from "../Components/UncompletedList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/list",
          element: <TodoList />,
        },
        {
          path: "/list/completed",
          element: <CompletedList />,
        },
        {
          path: "/list/uncompleted",
          element: <UncompletedList />,
        }
      ],
    },
  ]);

  export default router;