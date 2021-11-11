/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import { BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { products_url as url } from "../utils/constants";
import axios from "axios";
import cookies from "react-cookies";
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
import Apis, { endpoints } from "../configs/Apis";
import { Rate } from "antd";
const SingleProductPage = () => {
  const [rating, setRating] = useState(0);
  const user = useSelector((state) => state.user.user);

  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    layChiTietSanPham,
  } = useProductsContext();

  const saveRating = async (rate) => {
    try {
      let res = await axios.post(
        `${url}${id}/rating/`,
        {
          danhgia: rate,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.load("access_token")}`,
          },
        }
      );
      console.info(res.data);
      saveRating(res.data.rate);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    layChiTietSanPham(id);
    // eslint-disable-next-line
    setRating(id);
  }, [id]);

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

  let r = "";
  if (user !== null && user !== undefined) {
    r = (
      <>
        <Rating initialRating={rating} onClick={saveRating} />
      </>
    );
  }

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
            <div>{r}</div>
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
