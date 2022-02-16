import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UnderConstruction from './elements/supplementary/UnderConstruction';
import Dashboard from './nav/Dashboard';
import Certificate from './pages/Certificate';

export default function Routes_() {
    return <Routes >
        <Route exact path="/:userType/dashboard" element={<Dashboard />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="*" element={<UnderConstruction />} />
    </Routes>;
}
