// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { BsStarFill } from "react-icons/bs";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useProductsContext } from "../context/products_context";
// import cookies from "react-cookies";
// import { products_url as url } from "../utils/constants";
// import Apis, { endpoints } from "../configs/Apis";
// const Stars = () => {
//   const { id } = useParams();
//   const [rating, setRating] = useState(null);
//   const [rate, setRate] = useState(0);
//   const [hover, setHover] = useState(null);
//   const user = useSelector((state) => state.user.user);

//   const saveRating = async (rate, id) => {
//     // if (window.confirm("Bạn có muốn đánh giá sản phẩn này không ?") == true) {
//     try{
//       let res = await Apis.post(endpoints['rating'](id),{
//         "rating":rate
//       },{
//         headers:{
//           "Authorization":`Bearer${cookies.load("access_token")}`
//         }
//       })
//       console.info(res.data)
//     }catch(err){
//       console.log(err);
//     }
//     // }
//   };
//   return (
//     <Wrapper>
//       <div className="stars">
//         {user && (
//           <div>
//             {[...Array(5)].map((star, i) => {
//               const ratingValue = i + 1;
//               return (
//                 <label>
//                   <input
//                     type="radio"
//                     name="rating"
//                     value={ratingValue}
//                     onClick={() => setRating(ratingValue)}
//                   />
//                   <BsStarFill
//                     className="starFill"
//                     onMouseEnter={() => setHover(ratingValue)}
//                     onMouseLeave={() => setHover(null)}
//                     onClick={saveRating}
//                     color={
//                       ratingValue <= (hover || rating) ? "#ffb900" : "#e4e5e9"
//                     }
//                   />
//                 </label>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   p {
//     margin-left: 0.5rem;
//     margin-bottom: 0;
//   }
//   margin-bottom: 0.5rem;
//   input[type="radio"] {
//     display: none;
//   }
// `;
// export default Stars;
