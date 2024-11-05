import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import NotFound from "pages/NotFound";
import ProtectedRoute from "layouts/ProtectedRoute";
import { AuthProvider } from "layouts/AuthContext";
import LandingPage from "pages/LandingPage";
import LoginPage from "pages/sign/LoginPage";
import SignupPage from "pages/sign/SignupPage";
import HomeLayout from "layouts/HomeLayout";
import PromiseLayout from "layouts/PromiseLayout";
import HomePage from "pages/HomePage";
import PromisePage from "pages/PromisePage";
import NotificationPage from "pages/NotificationPage";

export default function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          {/* 로그인 페이지 */}
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />

          {/* 미로그인시 랜딩페이지로 이동 및 네비게이션 바 추가 */}
          <Route element={<ProtectedRoute />}>
            <Route path="/*">
              {/* 네비게이션 바가 있는 나머지 페이지 */}
              <Route path="promise" element={<PromiseLayout />}>
                {/* 아래 PromisePage.jsx는 예시로 만들어둔거라 자유롭게 편집해주세요! */}
                <Route path="" element={<PromisePage />} />
              </Route>
              <Route path="home" element={<HomeLayout />}>
                {/* 아래 HomePage.jsx는 예시로 만들어둔거라 자유롭게 편집해주세요! */}
                <Route path="" element={<HomePage />} />
              </Route>
              <Route path="notification" element={<Outlet />}>
                <Route path="" element={<NotificationPage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
