import React, {lazy, Suspense} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Loading from './components/Loading';
import Login from './pages/Login';
import Register from './pages/Register';
import {Col, Row} from 'antd';

const Home = lazy(() => import('./pages/Home'));
const History = lazy(() => import('./pages/History'));
const About = lazy(() => import('./pages/About'));

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Row>
        <Col span={20} offset={2}>
          <main>
            <Suspense fallback={<Loading/>}>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
              </Routes>
            </Suspense>
          </main>
        </Col>
      </Row>
      <Footer/>
    </>
  );
};

export default App;
