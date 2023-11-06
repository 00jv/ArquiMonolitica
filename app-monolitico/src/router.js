import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Routes } from "react-router-dom";
import IMC from './pages/calculoimc';
import Todolist from './pages/todolist';

const MyRouter = () => {
  return (
    <Routes>
        <Route index Component={Todolist} />
        <Route path="/IMC" Component={IMC} />
    </Routes>
  );
};

export default MyRouter;