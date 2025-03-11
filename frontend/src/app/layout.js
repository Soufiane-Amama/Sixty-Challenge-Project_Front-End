import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["cairo"], // استدعاء نوع الخط الاساسي
  weight: ["200", "300", "400", "500", "600", "700", "800"], // الاوزان للخط
});

const inter = Inter({
  subsets: ["inter"], // استدعاء نوع الخط  الثانوي
  weight: ["400", "700"], // الاوزان للخط
});

export const metadata = {
  title: "Sixty Challenge App", // عنوان الموقع
  description: // وصف الموقع
    "The Sixty Challenge app helps you achieve your goals and build positive habits in 60 consecutive days with more than 1,000 champions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/logo.png" /> 
      </head>
      <body className={`${cairo.className} ${inter.className}`}>
          {children}
      </body>
    </html>
  );
}
