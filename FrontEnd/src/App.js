import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AddUser from './pages/add';
import EditUser from './pages/edit';
import './App.css';
import { Logos } from './components/logos';
import { Photos } from './components/photos';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { EVENTS } from './components/EVENTS';
import { Login } from './pages/loginAdmin';
import CRUD from './pages/form';
import { AdminRoute } from './components/adminRoute';
import { FutureEvents } from './pages/ActualiteEvents';
import { AddResidence } from './components/addresidence';
import { RESIDANCE } from './components/residence';
import { Editresidence } from './pages/editResidence';
import { RESIDANCE_ARCHIVE } from './components/residence-archive';
import { FuturResidence } from './components/residence-actualite';
import {PodcastPage} from './components/podcasts';
import { Biography } from './components/biographie';
import { Bibliotheque } from './components/biblio';
import { InfosPratiques } from './components/info';
import  { Descriptif } from './components/descriptif';
import { Archives } from './components/archives';
import {ResourcesPage} from './components/resources';
import {PhotoAlbum} from './components/album';

function App() {
  const [userList, setUserList] = useState([]);
  const [residenceList, setResidenceList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const eventsResponse = await fetch('http://localhost:5001/events/');
      const eventsData = await eventsResponse.json();
      setUserList(eventsData);

      const residenceResponse = await fetch('http://localhost:5001/residences');
      const residenceData = await residenceResponse.json();
      setResidenceList(residenceData);
    };

    fetchData();
  }, []);

  const location = useLocation();

  useEffect(() => {
    // This ensures your main.js logic is re-run
    if (window.initMainJs) {
      window.initMainJs();
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/" element={<><Header /><Home /><InfosPratiques/><Descriptif/><Logos /><Footer /></>} />
        <Route path="/agenda-archive" element={<><Header /><EVENTS /><Logos /><Footer /></>} />
        <Route path="/residence-archive" element={<><Header /><RESIDANCE_ARCHIVE /><Logos /><Footer /></>} />
        <Route path="/residence-actualite" element={<><Header /><FuturResidence /><Logos /><Footer /></>} />
        <Route path="/residence" element={<><Header /><RESIDANCE /><Logos /><Footer /></>} />
        <Route path="/Photos" element={<><Header /><Photos /><Logos /><Footer /></>} />
        <Route path="/podcast" element={<><Header /><PodcastPage /><Logos /><Footer /></>} />
        <Route path="/actualites" element={<><Header /><FutureEvents /><Logos /><Footer /></>} />
        <Route path="/Biography" element={<><Header /><Biography /><Logos /><Footer /></>} />
        <Route path="/bibliotheque" element={<><Header /><Bibliotheque /><Logos /><Footer /></>} />
        <Route path="/Archives" element={<><Header /><Archives /><Logos /><Footer /></>} />
        <Route path="/ResourcesPage" element={<><Header /><ResourcesPage /><Logos /><Footer /></>} />
        <Route path="/PhotoAlbum" element={<><Header /><PhotoAlbum /><Logos /><Footer /></>} />
        
        <Route 
          path="/CRUD" 
          element={
            <AdminRoute>
              <CRUD 
                users={userList}
                userList={userList}
                setUserList={setUserList} 
                residence={residenceList} 
                setResidence={setResidenceList}
              />
            </AdminRoute>
          } 
        />
        <Route path="/addEvent" element={<AddUser userList={userList} setUserList={setUserList} />} />
        <Route path="/addresidence" element={<AddResidence />} />
        <Route path="/edit/event/:id" element={<EditUser userList={userList} setUserList={setUserList} />} />
        <Route path="/edit/:id" element={<Editresidence residence={residenceList} setResidence={setResidenceList} />} />
        
        {/* 404 Not Found */}
        <Route path="*" element={<h2>404 - Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
