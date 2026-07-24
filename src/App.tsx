import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AppShell } from './app/layout/AppShell';
import { Dashboard } from './app/routes/Dashboard';
import { DesignSystem } from './app/routes/DesignSystem';
import { SubjectPage } from './app/routes/SubjectPage';

const AppLayout = () => (
  <AppShell>
    <Outlet />
  </AppShell>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/subject/:subjectId" element={<SubjectPage />} />
          <Route path="*" element={<div className="p-8 text-center text-text-secondary">404 - Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
