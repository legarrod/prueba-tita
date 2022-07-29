import React from 'react';
import 'assets/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModuleLogin, ModuleHome, ErrorNotFound } from 'pages/';
import Layout from 'components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModuleLogin />} />
        <Route
          path="home"
          element={
            <Layout>
              <ModuleHome />
            </Layout>
          }
        />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
