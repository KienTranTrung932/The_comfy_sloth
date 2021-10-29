import React, { useEffect,useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import { saveRating } from "../components/Stars";
import { BsStarFill } from "react-icons/bs";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const SingleProductPage = () => {
  const [rating, setRating] = useState(null);
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(null);
  const user = useSelector((state) => state.user.user);

  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    layChiTietSanPham,
    layDanhGiaSanPham,
  } = useProductsContext();

  useEffect(() => {
    layChiTietSanPham(id);
    layDanhGiaSanPham(id,rate)
    // eslint-disable-next-line
  }, [id,rate]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {
    tensp = "",
    dongianiemyet,
    mota,
    stock,
    // stars,
    reviews,
    masp: sku,
    // company,
    hinhanh,
  } = product;
  return (
    <Wrapper>
      <PageHero title={tensp} product />
      <div className="section section-center page">
        <Link to="/SanPham" className="btn">
          Trở về trang sản phẩm
        </Link>
        <div className=" product-center">
          <ProductImages images={hinhanh} />
          <section className="content">
            <h2>{tensp}</h2>

            <Wrapper2>
              <div className="stars">
                {user && (
                  <div>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label>
                          <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                          />
                          <BsStarFill
                            className="starFill"
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            onClick={saveRating}
                            color={
                              ratingValue <= (hover || rating)
                                ? "#ffb900"
                                : "#e4e5e9"
                            }
                          />
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            </Wrapper2>
            
            <h5 className="price"> {formatPrice(dongianiemyet)}</h5>
            <p className="desc"> {mota}</p>
            <p className="info">
              <span>Có sẵn : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>Mã kho: </span>
              {sku}
            </p>
            {/* <p className='info'>
              <span>Công ty: </span>
              {company}
            </p> */}
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
  input[type="radio"] {
    display: none;
  }
`;
export default SingleProductPage;
