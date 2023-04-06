import { Route, Routes } from "react-router-dom";
import React from "react";
import AllMeetup from "./pages/allMeetup";
import FavrouiteMeetup from "./pages/favrouite";
import NewMeetup from "./pages/newMeetup";
import Layout from "./component/layout/Layout";
function App() {
  return (
    
      <Layout>
      <Routes>
        <Route path="/" element={<AllMeetup />}/>
        <Route path="/new-meetup" element={<NewMeetup />}/>
        <Route path="/favrouites" element={<FavrouiteMeetup />}/>
      </Routes>
      </Layout>
    
  );
}

export default App;
