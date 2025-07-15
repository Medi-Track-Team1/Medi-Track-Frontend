import React from "react";

import ConsultTypeBar from "../../components/Doctor_panel/ConsultTypeBar";
import PerfMetric from "../../components/Doctor_panel/PerfMetric";
import { KpiCard } from "../../components/Doctor_panel/KpiCard";
import { BarMini, LineMini } from "../../components/Doctor_panel/BarMini";
import ChartCard from "../../components/Doctor_panel/ChartCard";
import AgeDonut from "../../components/Doctor_panel/AgeDonut";
import TopMedicines from "../../components/Doctor_panel/TopMedicines";
import {
  HiOutlineUsers,
  HiOutlineClipboardCheck,
  HiOutlineClock,
  HiOutlinePencil,
} from "react-icons/hi";
const patientsWeek = [
  { name: "Mon", value: 12 }, { name: "Tue", value: 15 }, { name: "Wed", value: 18 },
  { name: "Thu", value: 14 }, { name: "Fri", value: 16 }, { name: "Sat", value: 8 },
  { name: "Sun", value: 5 },
];

const consultTrend = [
  { name: "Jan", value: 240 }, { name: "Feb", value: 260 }, { name: "Mar", value: 280 },
  { name: "Apr", value: 260 }, { name: "May", value: 290 }, { name: "Jun", value: 300 },
];

const ageData = [
  { name: "18‑30", value: 18 }, { name: "31‑45", value: 25 },
  { name: "46‑60", value: 30 }, { name: "60+", value: 27 },
];

const topMeds = [
  { name: "Lisinopril", count: 45, percent: 45 },
  { name: "Metformin", count: 38, percent: 38 },
  { name: "Aspirin", count: 32, percent: 32 },
  { name: "Atorvastatin", count: 28, percent: 28 },
  { name: "Amoxicillin", count: 22, percent: 22 },
];

const consultTypes = [
  { name: "Jan", inPerson: 0.7, tele: 0.3 },
  { name: "Feb", inPerson: 0.6, tele: 0.4 },
  { name: "Mar", inPerson: 0.65, tele: 0.35 },
];

export default function DoctorDashboard() {
  return (
    <div className="space-y-8 px-4 pb-10 sm:px-6 lg:px-8 bg-blue-50 min-h-screen">
      <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl text-blue-900">
        Analytics Dashboard
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-6">
        <KpiCard title="Patients This Month" value="186" delta="+12%" icon={<HiOutlineUsers className="text-3xl" />} />
        <KpiCard title="Consultations Today" value="14" delta="+3" icon={<HiOutlineClipboardCheck className="text-3xl" />} />
        <KpiCard title="Avg Consult Time" value="22 min" delta="-2 min" icon={<HiOutlineClock className="text-3xl" />} />
        <KpiCard title="Prescriptions" value="89" delta="+18%" icon={<HiOutlinePencil className="text-3xl" />} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2 2xl:gap-6">
        <ChartCard title="Patients This Week">
          <BarMini data={patientsWeek} />
        </ChartCard>

        <ChartCard title="Monthly Trend">
          <LineMini data={consultTrend} />
        </ChartCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 2xl:gap-6">
        <ChartCard title="Top Medicines">
          <TopMedicines data={topMeds} />
        </ChartCard>

        <ChartCard title="Age Distribution">
          <AgeDonut data={ageData} />
        </ChartCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 2xl:gap-6">
        <ChartCard title="Consultation Types">
          <ConsultTypeBar data={consultTypes} />
        </ChartCard>

        <div className="space-y-3 rounded-xl bg-blue-100 p-4 shadow-md">
          <h2 className="mb-2 font-semibold text-blue-700">Performance Metrics</h2>
          <PerfMetric color="bg-blue-600" value="98.5%" label="Attendance Rate" delta="+2.3%" />
          <PerfMetric color="bg-green-500" value="4.8/5" label="Avg Rating" delta="+0.2" />
          <PerfMetric color="bg-purple-500" value="15 min" label="Avg Wait Time" delta="-5 min" />
          <PerfMetric color="bg-orange-500" value="92%" label="Follow‑Up Compliance" delta="+5%" />
        </div>
      </div>
    </div>
  );
}
