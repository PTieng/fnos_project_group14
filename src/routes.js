import Home from "./pages/Home";
import GioiThieu from "./pages/GioiThieu";
import Nike from "./pages/Nike";
import Adidas from "./pages/Adidas";
import Converse from "./pages/Converse";
import MLB from "./pages/MLB";
import NewBalance from "./pages/NewBalance";
import Puma from "./pages/Puma";
import Short from "./pages/Short";
import Jeans from "./pages/Jeans";
import Tee from "./pages/Tee";
import Jacket from "./pages/Jacket";
import LienHe from "./pages/LienHe";
import PTThanhToan from "./pages/PTThanhToan";
import CSGiaoHang from "./pages/CSGiaoHang";
import CSDoiHang from "./pages/CSDoiHang";
import NikeItem1 from "./info/NikeItem1";
import ConverseItem from "./info/ConverseItem";
import AdidasItem from "./info/AdidasItem";
import MLBItem from "./info/MLBItem";
import NBItem from "./info/NBItem";
import PageCart from "./pages/PageCart";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ShortItem from "./info/ShortItem";
import JacketItem from "./info/JacketItem";
import JeansItem from "./info/JeansItem";
import PumaItem from "./info/PumaItem";
import TeeItem from "./info/TeeItem";
import Payment from "./pages/Payment";
const routes = [
  { path: "/*", component: <Home /> }, // trang mặc định - vừa load web nhảy vào trang này
  { path: "Home", component: <Home /> }, // trang home - bấm vào mới nhảy
  { path: "GioiThieu", component: <GioiThieu /> },
  { path: "Nike", component: <Nike /> },
  { path: "Adidas", component: <Adidas /> },
  { path: "Converse", component: <Converse /> },
  { path: "MLB", component: <MLB /> },
  { path: "NewBalance", component: <NewBalance /> },
  { path: "Puma", component: <Puma /> },
  { path: "Short", component: <Short /> },
  { path: "Jeans", component: <Jeans /> },
  { path: "Tee", component: <Tee /> },
  { path: "Jacket", component: <Jacket /> },
  { path: "LienHe", component: <LienHe /> },
  { path: "PTThanhToan", component: <PTThanhToan /> },
  { path: "CSGiaoHang", component: <CSGiaoHang /> },
  { path: "CSDoiHang", component: <CSDoiHang /> },
  { path: "/Nike/:id", component: <NikeItem1 /> },
  { path: "/Converse/:id", component: <ConverseItem /> },
  { path: "/Adidas/:id", component: <AdidasItem /> },
  { path: "/MLB/:id", component: <MLBItem /> },
  { path: "/NewBalance/:id", component: <NBItem /> },
  { path: "/Puma/:id", component: <PumaItem /> },
  { path: "/Short/:id", component: <ShortItem /> },
  { path: "/jacket/:id", component: <JacketItem /> },
  { path: "/Tee/:id", component: <TeeItem /> },
  { path: "/Jeans/:id", component: <JeansItem /> },
  { path: "PageCart", component: <PageCart /> },
  { path: "Login", component: <Login /> },
  { path: "Register", component: <Register /> },
  { path: "Payment", component: <Payment /> },
];

export default routes;
