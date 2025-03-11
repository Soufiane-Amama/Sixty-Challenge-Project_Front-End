"use client";

import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { userMenu, adminMenu } from "./data"; // هذه عناصر القائمة الجانبية للوحة تحكم - يمكنك التعديل عليها فهي كمثال فقط
import DashboardTopBar from "@/src/components/DashboardTopBar/DashboardTopBar";
import Sidebar from "@/src/components/Sidebar/Sidebar";
// هنا يتم استدعاء جميع صفحات لوحة التحكم سواء للمشرف او مستخدم عادي

const Dashboard = () => {
  return (
    <div>
      Dashboard page
    </div>
  )
}

export default Dashboard
