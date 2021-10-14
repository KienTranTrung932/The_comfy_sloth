import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    layChiTietSanPham,
  } = useProductsContext()

  useEffect(() => {
    layChiTietSanPham(`${url}${id}`)
    console.log(layChiTietSanPham)
    // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
    // eslint-disable-next-line
  }, [error])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const {
    tensp ,
    dongianiemyet,
    mota,
    stock,
    // stars,
    // reviews,
    id: sku,
    // company,
    hinhsp,
  } = product
  return (
    <Wrapper>
      <PageHero title={tensp} product />
      <div className='section section-center page'>
        <Link to='/SanPham' className='btn'>
          Trở về trang sản phẩm
        </Link>
        <div className=' product-center'>
          <ProductImages images={hinhsp} />
          <section className='content'>
            <h2>{tensp}</h2>
            {/* <Stars stars={stars} reviews={reviews} /> */}
            <h5 className='price'> {formatPrice(dongianiemyet)}</h5>
            <p className='desc'> {mota}</p>
            <p className='info'>
              <span>Có sẵn : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
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
  )
}

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
`

export default SingleProductPage
