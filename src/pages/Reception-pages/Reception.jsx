import { Routes, Route } from "react-router-dom";
import ReceptionDashboard from "../../components/Reception/reception/ReceptionDashboard";

const ReceptionPage = () => (
  <Routes>
    <Route index element={<ReceptionDashboard />} />
    <Route path="*" element={<ReceptionDashboard />} />
  </Routes>
);

export default ReceptionPage;
