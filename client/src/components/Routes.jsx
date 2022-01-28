import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UnderConstruction from './elements/supplementary/UnderConstruction';
import Dashboard from './nav/Dashboard';
import LogIn from './pages/authentication/LogIn';
import SignIn from './pages/authentication/SignIn';
import Certificate from './pages/Certificate';

export default function Routes_() {
    return <Routes>
        <Route exact path="/:userType/dashboard" element={<Dashboard />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<UnderConstruction />} />
    </Routes>;
}
