import React from "react";
import { Route, Routes } from 'react-router'
import Home from "../home/Home";
import UserCRUD from "../users/UserCRUD";

export default props =>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCRUD />} />
        <Route path="*" element={<Home />} />
    </Routes>