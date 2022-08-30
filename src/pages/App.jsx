import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Routee } from "../routes"
import { Sidebar, Footer } from "../components";
import { Signin, NotFound,HomePage } from "../pages";


function App() {
    return (
        <Routes>
            {/* Routes With Sidebar */}
            <Route element={<Sidebar />}>
                <Route exact path={Routee.Footer.path} element={<Footer />} />
            </Route>
            {/* Pages */}
            <Route exact path={Routee.Home.path} element={<HomePage />} />
            <Route exact path={Routee.Signin.path} element={<Signin />} />
            <Route exact path={Routee.NotFound.path} element={<NotFound />} />
        </Routes>
    )
}

export default App