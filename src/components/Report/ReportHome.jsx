import React from 'react'
import Navbar from "@/components/Report/Navbar";
import { Routes, Route } from "react-router-dom";
import Image from "@/components/Report/Image";
import Download_popup from './Download_popup';
// import Upload from "@/components/Report/Upload";    

const ReportHome = () => {
  return (
       <>
       <Download_popup></Download_popup>
       <Navbar></Navbar>
       <Routes>
        <Route path='/' element={<Image/>}></Route>
        {/* <Route path='/upload' element={<Upload/>}></Route> */}
       </Routes>
       </>
  )
}

export default ReportHome