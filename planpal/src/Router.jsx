import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import ProtectedRoute from "./layout/ProtectedRoute";
import { AuthProvider } from "./layout/AuthContext";
import HomePage from "./pages/HomePage";
import PromisePage from "./pages/PromisePage";

export default function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          {/* 로그인 페이지 */}
          <Route path="/landing" element={<Landing />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/*">
              {/* 네비게이션 바가 있는 나머지 페이지 */}
              {/* 아래(home,promise)는 예시로 만들어둔거라 자유롭게 편집해주세요! */}
              <Route path="home" element={<HomePage />} />
              <Route path="promise" element={<PromisePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
