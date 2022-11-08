// import logo from './logo.svg';
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes/Routes";

function App() {
    return (
        <div className="container mx-auto">
            <RouterProvider router={routes}></RouterProvider>
        </div>
    );
}

export default App;
