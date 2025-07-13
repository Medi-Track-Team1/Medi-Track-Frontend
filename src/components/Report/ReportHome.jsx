import React from 'react'
import Navbar from "@/components/Report/Navbar";
import { Routes, Route } from "react-router-dom";
import Image from "@/components/Report/Image";
import Download_popup from './Download_popup';
import RecentUploadActivity from './RecentUploadActivity';
import UploadForm from './UploadForm';
import MedicalReports from './MedicalReport';

const ReportHome = () => {
  return (
       <>
       <Download_popup></Download_popup>
       <Navbar></Navbar>
       <Routes>
        <Route path='/' element={<Image/>}></Route>
        <Route path='/recent' element={<RecentUploadActivity/>}></Route>
        <Route path='/upload' element={<UploadForm/>}></Route>
        <Route path='/browse' element={<MedicalReports/>}></Route>
       </Routes>
       </>
  )
}

export default ReportHome