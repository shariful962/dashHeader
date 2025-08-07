import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Icons from "../../assets/image";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineScan } from "react-icons/ai";
import { TfiCrown } from "react-icons/tfi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";




// Constant 12 months for X-axis
const allMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Example dummy data per selected month
// const monthlyData = {
//   January: [
//     { name: "Jan", users: 22 },
//     { name: "Feb", users: 19 },
//     { name: "Mar", users: 21 },
//   ],
//   February: [
//     { name: "Feb", users: 28 },
//     { name: "Mar", users: 36 },
//     { name: "Apr", users: 45 },
//   ],
// };

const monthlyData = {
  January: [
    { name: "Jan", users: 22 },
    { name: "Feb", users: 19 },
    { name: "Mar", users: 21 },
    { name: "Apr", users: 35 },
    { name: "May", users: 58 },
    { name: "Jun", users: 53 },
    { name: "Jul", users: 47 },
    { name: "Aug", users: 40 },
    { name: "Sep", users: 38 },
    { name: "Oct", users: 30 },
    { name: "Nov", users: 25 },
    { name: "Dec", users: 20 },
  ],
  February: [
    { name: "Jan", users: 18 },
    { name: "Feb", users: 28 },
    { name: "Mar", users: 36 },
    { name: "Apr", users: 45 },
    { name: "May", users: 51 },
    { name: "Jun", users: 48 },
    { name: "Jul", users: 42 },
    { name: "Aug", users: 38 },
    { name: "Sep", users: 33 },
    { name: "Oct", users: 29 },
    { name: "Nov", users: 23 },
    { name: "Dec", users: 18 },
  ],
  March: [
    { name: "Jan", users: 20 },
    { name: "Feb", users: 25 },
    { name: "Mar", users: 40 },
    { name: "Apr", users: 50 },
    { name: "May", users: 60 },
    { name: "Jun", users: 55 },
    { name: "Jul", users: 50 },
    { name: "Aug", users: 45 },
    { name: "Sep", users: 40 },
    { name: "Oct", users: 35 },
    { name: "Nov", users: 30 },
    { name: "Dec", users: 25 },
  ],
  April: [
    { name: "Jan", users: 15 },
    { name: "Feb", users: 20 },
    { name: "Mar", users: 30 },
    { name: "Apr", users: 40 },
    { name: "May", users: 50 },
    { name: "Jun", users: 48 },
    { name: "Jul", users: 44 },
    { name: "Aug", users: 40 },
    { name: "Sep", users: 36 },
    { name: "Oct", users: 32 },
    { name: "Nov", users: 28 },
    { name: "Dec", users: 24 },
  ],
  May: [
    { name: "Jan", users: 18 },
    { name: "Feb", users: 22 },
    { name: "Mar", users: 26 },
    { name: "Apr", users: 32 },
    { name: "May", users: 52 },
    { name: "Jun", users: 49 },
    { name: "Jul", users: 45 },
    { name: "Aug", users: 41 },
    { name: "Sep", users: 36 },
    { name: "Oct", users: 30 },
    { name: "Nov", users: 25 },
    { name: "Dec", users: 22 },
  ],
  June: [
    { name: "Jan", users: 21 },
    { name: "Feb", users: 24 },
    { name: "Mar", users: 28 },
    { name: "Apr", users: 34 },
    { name: "May", users: 44 },
    { name: "Jun", users: 59 },
    { name: "Jul", users: 48 },
    { name: "Aug", users: 43 },
    { name: "Sep", users: 39 },
    { name: "Oct", users: 33 },
    { name: "Nov", users: 27 },
    { name: "Dec", users: 22 },
  ],
  July: [
    { name: "Jan", users: 19 },
    { name: "Feb", users: 23 },
    { name: "Mar", users: 27 },
    { name: "Apr", users: 31 },
    { name: "May", users: 38 },
    { name: "Jun", users: 45 },
    { name: "Jul", users: 55 },
    { name: "Aug", users: 50 },
    { name: "Sep", users: 46 },
    { name: "Oct", users: 41 },
    { name: "Nov", users: 36 },
    { name: "Dec", users: 31 },
  ],
  August: [
    { name: "Jan", users: 23 },
    { name: "Feb", users: 26 },
    { name: "Mar", users: 29 },
    { name: "Apr", users: 34 },
    { name: "May", users: 42 },
    { name: "Jun", users: 49 },
    { name: "Jul", users: 51 },
    { name: "Aug", users: 59 },
    { name: "Sep", users: 52 },
    { name: "Oct", users: 45 },
    { name: "Nov", users: 38 },
    { name: "Dec", users: 32 },
  ],
  September: [
    { name: "Jan", users: 24 },
    { name: "Feb", users: 28 },
    { name: "Mar", users: 30 },
    { name: "Apr", users: 35 },
    { name: "May", users: 44 },
    { name: "Jun", users: 51 },
    { name: "Jul", users: 53 },
    { name: "Aug", users: 57 },
    { name: "Sep", users: 61 },
    { name: "Oct", users: 55 },
    { name: "Nov", users: 49 },
    { name: "Dec", users: 42 },
  ],
  October: [
    { name: "Jan", users: 20 },
    { name: "Feb", users: 22 },
    { name: "Mar", users: 25 },
    { name: "Apr", users: 28 },
    { name: "May", users: 36 },
    { name: "Jun", users: 40 },
    { name: "Jul", users: 44 },
    { name: "Aug", users: 48 },
    { name: "Sep", users: 53 },
    { name: "Oct", users: 60 },
    { name: "Nov", users: 58 },
    { name: "Dec", users: 54 },
  ],
  November: [
    { name: "Jan", users: 17 },
    { name: "Feb", users: 20 },
    { name: "Mar", users: 23 },
    { name: "Apr", users: 26 },
    { name: "May", users: 30 },
    { name: "Jun", users: 35 },
    { name: "Jul", users: 39 },
    { name: "Aug", users: 42 },
    { name: "Sep", users: 45 },
    { name: "Oct", users: 48 },
    { name: "Nov", users: 55 },
    { name: "Dec", users: 51 },
  ],
  December: [
    { name: "Jan", users: 16 },
    { name: "Feb", users: 18 },
    { name: "Mar", users: 20 },
    { name: "Apr", users: 25 },
    { name: "May", users: 28 },
    { name: "Jun", users: 32 },
    { name: "Jul", users: 35 },
    { name: "Aug", users: 38 },
    { name: "Sep", users: 42 },
    { name: "Oct", users: 45 },
    { name: "Nov", users: 48 },
    { name: "Dec", users: 52 },
  ],
};

const months = Object.keys(monthlyData);

// Fills all 12 months
const buildFullYearData = (partialData) => {
  const map = Object.fromEntries(partialData.map((d) => [d.name, d.users]));
  return allMonths.map((month) => ({
    name: month,
    users: map[month] ?? 0,
  }));
};


// card section object 
const card = [
  {
    title: "Total Users",
    value: "120",
    positive: true,
    change: "+15",
    ico: HiOutlineUsers
    
  },  {
    title: "Total  Subs",
    value: "60",
    positive: true,
    change: "+85",
    ico: TfiCrown
    
  },  {
    title: "Total  med scanned",
    value: "240",
    positive: true,
    change: "-5",
    ico: AiOutlineScan
    
  }
]

const Dashboard1 = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  const data = buildFullYearData(monthlyData[selectedMonth]);

  return (
    <div className="min-h-screen bg-bgClr">
      {/* header section  */}
      <header className="w-full bg-White h-[90px] font-OpenSans">
        <div className="flex justify-end h-full">
          <div className="flex items-center gap-4 px-4">
            <div>
              <img
                src={Icons.profilePic}
                alt="user profile picture"
                className="h-15 w-15 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-[1.5rem] font-semibold text-textClr leading-[100%]">Dr Cori</h1>
              <p className="text-[1.175rem] text-stroke">cori@gmail.com</p>
            </div>
          </div>
        </div>
      </header>
      {/* main content  */}
      <div className="font-Poppins mt-[3.4375rem] px-4  md:px-[2rem] lg:px-[4rem] mx-auto">
        <h1 className="text-[2.25rem] font-semibold leading-[100%] ">Dashboard</h1>

        {/* card section  */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {card.map(({title, positive, value, change, ico:Icon},i)=>(
              <div key={i} className="bg-White p-4 rounded-[16px] border border-stroke">
                  <div className="flex items-center justify-between">
                    <h1>{title}</h1>
                    <div className="w-15 h-15 bg-stroke rounded-full text-white flex items-center justify-center">
                      <span className="text-2xl"><Icon /></span>
                    </div>
                  </div>
                  <div className="flex  gap-x-9 items-center  mt-4">
                    <h2 className="text-[1.5rem] font-semibold">{value}</h2>
                    <div className={`text-base ${positive  ? "text-green-500" : "text-red-500" }`}>
                       {positive ? (
                      <FaCaretUp size={22} />
                    ) : (
                      <FaCaretDown size={22} />
                    )} {" "}  {change}% <div>
                        {change >0 ?"up": "down"} from yesterday
                    </div>
                    </div>
                    </div>
              </div>
            ))}
          </div>
        </div>

        {/* chart section  */}
        <div className="bg-white p-4 rounded-xl shadow-sm w-full mt-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-md font-semibold text-gray-700">Users overtime</h3>
                <select
                  className="text-sm border border-gray-300 rounded px-2 py-1 text-gray-600"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
        
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <CartesianGrid stroke="#e5e7eb" vertical={true} horizontal={true} />
                  <XAxis dataKey="name" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, fill: "#2563eb", stroke: "#fff" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
      </div>
    </div>
  );
};

export default Dashboard1;
