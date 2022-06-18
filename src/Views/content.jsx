import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage';
import Builder from './pages/builder';
import Donate from './pages/donate';
import PageNotFound from './pages/404';

const Content = (props) => {
    return (
        <div className="container content mt-5">
            <div className="row purple-bk rounded-3 p-3">
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/new-build" element={<Builder />}></Route>
                    <Route path="/donate" element={<Donate />}></Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </div>
    );
}
export default Content;