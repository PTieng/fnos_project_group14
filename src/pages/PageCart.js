// import { addCart } from "../redux/action";
// import { useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { delItem } from "../redux/action";
// const PageCart = () => {
//   var total = 0;
//   const state = useSelector((state) => state.handleCart);
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState(data);
//   let componentMounted = true;
//   const dispatch = useDispatch();
//   const defaultQuantity = 1;
//   const [cartQuantities, setCartQuantities] = useState({});
//   const handleClose = (item) => {
//     dispatch(delItem(item));
//   };
//   const handleIncrement = (cartItems) => {
//     cartItems.preventDefault();
//     const newQuantities = { ...cartQuantities };
//     newQuantities[cartItems.id] =
//       (newQuantities[cartItems.id] || defaultQuantity) + 1;
//     setCartQuantities(newQuantities);
//   };

//   const handleDecrement = (cartItems) => {
//     cartItems.preventDefault();
//     const newQuantities = { ...cartQuantities };
//     newQuantities[cartItems.id] = Math.max(
//       (newQuantities[cartItems.id] || defaultQuantity) - 1,
//       0
//     );
//     setCartQuantities(newQuantities);
//   };

//   const addProduct = (product) => {
//     dispatch(addCart(product));
//   };
//   useEffect(() => {
//     const getsProducts = async () => {
//       const response = await fetch("http://localhost:3000/apiproduct");
//       if (componentMounted) {
//         setData(await response.clone().json());
//         setFilter(await response.json());
//       }

//       return () => {
//         componentMounted = false;
//       };
//     };
//     getsProducts();
//   }, []);
//   return (
//     <>
//       <section id="productPage">
//         <div className="container">
//           <h4 className="text-center">Giỏ Hàng</h4>

        //   <table className="table mt-5">
        //     <thead>
        //       <tr>
        //         <th scope="col">Tên Sản Phẩm</th>
        //         <th scope="col">Hình Ảnh</th>
        //         <th scope="col">SL</th>
        //         <th scope="col">Đơn Giá</th>
        //         <th scope="col" />
        //       </tr>
        //     </thead>
        //     <tbody>
        //         {state.map((item) =>{
        //             <tr>
        //             <td>{item.name}</td>
        //             <td><img src={item.image} alt="" /></td>
        //             <td>
        //               <div className="quantity">
        //                 <button className="btn">
        //                   <i className="fa-solid fa-minus" />
        //                 </button>
        //                 <span>3</span>
        //                 <button className="btn">
        //                   <i className="fa-solid fa-plus" />
        //                 </button>
        //               </div>
        //             </td>
        //             <td>{item.price}</td>
        //             <th scope="row">
        //               <button className="btn text-danger fs-5">
        //                 <i className="fa-solid fa-xmark" />
        //               </button>
        //             </th>
        //           </tr>
        //         })}
              
        //     </tbody>
        //   </table>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PageCart;
