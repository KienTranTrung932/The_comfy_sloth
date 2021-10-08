import React, {useState} from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar, BsAlarmFill } from "react-icons/bs";
import StarRatings from "react-star-ratings";
import { useUserContext } from "../context/user_context";
import { FaStar } from "react-icons/fa";

const Stars = ({ stars, reviews }) => {
  const { myUser } = useUserContext();
  const [rating, setRating] = useState(null);
  const [hover,setHover] = useState(null);
  
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="stars">{
        !myUser &&(tempStars)
      }{
        myUser &&(
        <div>
          {[...Array(5)].map((star,i)=>{
            const ratingValue = i +1;
            return (
              <label>
                <input 
                  type='radio' 
                  name='rating' 
                  value ={ratingValue}
                  onClick={()=>setRating(ratingValue)}
                  
                />
                <BsStarFill 
                  className ='starFill'
                  onMouseEnter = {()=>setHover(ratingValue)}
                  onMouseLeave = {()=>setHover(null)}
                  color={ ratingValue <= (hover || rating) ?'#ffb900':'#e4e5e9'}
                />
              </label>
            )
          })}
        </div>)
      }
      </div>
      <p className="reviews">({reviews} reviews từ khách hàng)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
  input[type ="radio"]{
    display:none;
  }
`;
export default Stars;
