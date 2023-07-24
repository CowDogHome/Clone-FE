import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
import { LoginPage } from "../pages";
import { KakaoCallback } from "../pages/CallbackPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
        <Route path="/signup" element={<h1>Signup</h1>} />
        <Route path="/house/:houseId" element={<h1>HouseDetail</h1>} />
        {/* <Route
          path="/house/post"
          element={<ProtectedRoute element={<h1>HousePost</h1>} />}
        /> */}
        <Route path="/item/:itemId" element={<h1>ItemDetail</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
