import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Plus,
  Clock,
  Calendar,
  CheckCircle,
  AlertCircle,
  User,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

const AppointmentManagement = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [newAppointment, setNewAppointment] = useState({
    patientId: "",
    patientName: "",
    time: "",
    doctor: "",
    type: "",
    notes: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  // Mock data
  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];

  const doctors = [
    "Dr. Smith - Cardiology",
    "Dr. Johnson - Orthopedics",
    "Dr. Williams - General Medicine",
    "Dr. Brown - Pediatrics",
  ];

  const appointmentTypes = [
    "Consultation",
    "Follow-up",
    "Routine Checkup",
    "Emergency",
    "Procedure",
  ];

  const appointments = [
    {
      id: 1,
      time: "09:00",
      patientName: "John Doe",
      patientId: "P001",
      doctor: "Dr. Smith",
      type: "Consultation",
      status: "Confirmed",
    },
    {
      id: 2,
      time: "09:30",
      patientName: "Jane Smith",
      patientId: "P002",
      doctor: "Dr. Johnson",
      type: "Follow-up",
      status: "Pending",
    },
    {
      id: 3,
      time: "10:00",
      patientName: "Robert Wilson",
      patientId: "P003",
      doctor: "Dr. Williams",
      type: "Routine Checkup",
      status: "Confirmed",
    },
    {
      id: 4,
      time: "10:30",
      patientName: "Emily Davis",
      patientId: "P004",
      doctor: "Dr. Brown",
      type: "Emergency",
      status: "Confirmed",
    },
    {
      id: 5,
      time: "11:00",
      patientName: "Michael Johnson",
      patientId: "P005",
      doctor: "Dr. Smith",
      type: "Follow-up",
      status: "Pending",
    },
  ];

  const handleScheduleAppointment = () => {
    console.log("Scheduling appointment:", newAppointment);
    setDialogOpen(false);
    setNewAppointment({
      patientId: "",
      patientName: "",
      time: "",
      doctor: "",
      type: "",
      notes: "",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-500";
      case "Pending":
        return "bg-orange-500";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const isTimeSlotBooked = (time) => {
    return appointments.some((apt) => apt.time === time);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-4 px-6">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="mr-3 text-gray-600 hover:bg-gray-100"
                onClick={onBack}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-2xl font-semibold text-gray-900">
                Appointment Management
              </h1>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setDialogOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Schedule Appointment
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 px-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 mb-2">
                    Total Appointments
                  </p>
                  <p className="text-3xl font-semibold text-blue-600">
                    {appointments.length}
                  </p>
                </div>
                <div className="bg-blue-100 text-blue-600 ml-4 w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 mb-2">Confirmed</p>
                  <p className="text-3xl font-semibold text-green-600">
                    {
                      appointments.filter((apt) => apt.status === "Confirmed")
                        .length
                    }
                  </p>
                </div>
                <div className="bg-green-100 text-green-600 ml-4 w-12 h-12 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 mb-2">Pending</p>
                  <p className="text-3xl font-semibold text-orange-600">
                    {
                      appointments.filter((apt) => apt.status === "Pending")
                        .length
                    }
                  </p>
                </div>
                <div className="bg-orange-100 text-orange-600 ml-4 w-12 h-12 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 mb-2">Available Slots</p>
                  <p className="text-3xl font-semibold text-teal-600">
                    {timeSlots.length - appointments.length}
                  </p>
                </div>
                <div className="bg-teal-100 text-teal-600 ml-4 w-12 h-12 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Appointments Table - Takes 3 columns */}
          <div className="lg:col-span-3">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-0">
                {/* Fixed Header - Properly Centered */}
                <div className="p-6 pb-4">
                  <div className="text-center w-full">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Today's Appointments - {formatDate(selectedDate)}
                    </h2>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-y border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Time
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Patient
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Doctor
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {appointments.map((appointment) => (
                        <tr key={appointment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-400" />
                              <span className="text-sm font-medium text-gray-900">
                                {appointment.time}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="bg-blue-100 text-blue-600 w-8 h-8 mr-3 flex-shrink-0 rounded-full flex items-center justify-center">
                                <User className="h-4 w-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-sm font-medium text-gray-900 truncate">
                                  {appointment.patientName}
                                </div>
                                <div className="text-sm text-gray-500 truncate">
                                  {appointment.patientId}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <span className="text-sm text-gray-900">
                              {appointment.doctor}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <Badge
                              variant="outline"
                              className="text-xs font-medium"
                            >
                              {appointment.type}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <Badge
                              className={`${getStatusColor(
                                appointment.status
                              )} text-white text-xs font-medium`}
                            >
                              {appointment.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-gray-600 hover:bg-gray-100 hover:text-green-600"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-gray-600 hover:bg-gray-100 hover:text-red-600"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Takes 1 column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Date Selection */}
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Select Date
                </h3>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </CardContent>
            </Card>

            {/* Time Slots */}
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Available Time Slots
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => {
                    const isBooked = isTimeSlotBooked(time);

                    return (
                      <div
                        key={time}
                        className={`p-3 rounded-lg border-2 text-center cursor-pointer transition-all duration-200 ${
                          isBooked
                            ? "bg-red-50 border-red-200 text-red-600"
                            : "bg-green-50 border-green-200 text-green-600 hover:bg-green-100 hover:border-green-300"
                        }`}
                      >
                        <div className="font-semibold text-sm">{time}</div>
                        <div className="text-xs mt-1">
                          {isBooked ? "Booked" : "Available"}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Schedule Appointment Modal */}
      {dialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Schedule New Appointment
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Patient ID
                </label>
                <input
                  type="text"
                  value={newAppointment.patientId}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      patientId: e.target.value,
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Patient Name
                </label>
                <input
                  type="text"
                  value={newAppointment.patientName}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      patientName: e.target.value,
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Slot
                </label>
                <select
                  value={newAppointment.time}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      time: e.target.value,
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Time</option>
                  {timeSlots
                    .filter((time) => !isTimeSlotBooked(time))
                    .map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Doctor
                </label>
                <select
                  value={newAppointment.doctor}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      doctor: e.target.value,
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Type
                </label>
                <select
                  value={newAppointment.type}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      type: e.target.value,
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Type</option>
                  {appointmentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  value={newAppointment.notes}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      notes: e.target.value,
                    })
                  }
                  rows={3}
                  placeholder="Any special notes or requirements..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setDialogOpen(false)}
                className="px-6 py-2"
              >
                Cancel
              </Button>
              <Button
                onClick={handleScheduleAppointment}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
              >
                Schedule Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentManagement;
