import React, { useState, useContext } from "react";
import DailyQuotePage from "@/components/dailyquotepage/dailyquotepage.tsx";
import { DatabaseContext } from "@/lib/database.ts";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function generateDays(year: number, month: number) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const startDay = firstDay.getDay();
    const calendar: (number | null)[] = [];

    for (let i = 0; i < startDay; i++) {
        calendar.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        calendar.push(day);
    }

    return calendar;
}

export default function CalendarView() {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);

    const goToPreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((y) => y - 1);
        } else {
            setCurrentMonth((m) => m - 1);
        }
    };

    const goToNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((y) => y + 1);
        } else {
            setCurrentMonth((m) => m + 1);
        }
    };

    const { database, setDatabase } = useContext(DatabaseContext);

    const days = generateDays(currentYear, currentMonth);

    const handleDayClick = (day: number) => {
        const selectedDate = new Date(currentYear, currentMonth, day);

        if (selectedDate > today) {
            setShowModal(false);
            return;
        }

        setSelectedDay(day);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedDay(null);
    };

    return (
            <div className="p-4 max-w-xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center">{currentYear}</h1>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {monthNames.map((name, index) => (
                            <button
                                    key={name}
                                    className={`px-3 py-1 rounded ${
                                            index === currentMonth ? "bg-blue-600 text-white" : "bg-gray-200"
                                    }`}
                                    onClick={() => setCurrentMonth(index)}
                            >
                                {name}
                            </button>
                    ))}
                </div>

                <div className="flex justify-between items-center mb-2">
                    <button
                            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                            onClick={goToPreviousMonth}
                    >
                        &lt; Prev
                    </button>
                    <h2 className="text-xl font-semibold">
                        {monthNames[currentMonth]}
                    </h2>
                    <button
                            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                            onClick={goToNextMonth}
                    >
                        Next &gt;
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-1">
                    {daysOfWeek.map((day) => (
                            <div key={day}>{day}</div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-2 text-center">
                    {days.map((day, idx) => {
                        if (!day) return <div key={idx}></div>;

                        const isToday =
                                day === today.getDate() &&
                                currentMonth === today.getMonth() &&
                                currentYear === today.getFullYear();
                        const selectedDate = new Date(currentYear, currentMonth, day);
                        return (
                                <button
                                        key={idx}
                                        className={`p-3 border rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500
                            ${isToday ? "bg-yellow-400 text-yellow-900 font-semibold shadow-lg" : (selectedDate > today ? "bg-gray-50 text-gray-500" : "bg-white text-gray-900")}
                            hover:bg-blue-100`}
                                        onClick={() => handleDayClick(day)}
                                >
                                    {day}
                                </button>
                        );
                    })}
                </div>

                <br />

                {showModal && selectedDay !== null && (
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-h-[400px] overflow-auto relative">
                            <h2 className="text-xl font-bold mb-4 text-center">
                                Day {selectedDay} Info
                            </h2>

                            <DailyQuotePage quoteId={"q-2.1"} date={null} />

                            <div className="flex justify-center mt-6">
                                <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                )}
            </div>
    );
}
