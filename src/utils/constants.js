import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'Trang chủ',
    url: '/',
  },
  {
    id: 2,
    text: 'về chúng tôi',
    url: '/VeChungToi',
  },
  {
    id: 3,
    text: 'sản phẩm',
    url: '/SanPham',
  },
  {
    id:4,
    text:'Bài đánh giá',
    url:'/BaiDanhGia'
  },
  // {
  //   id:5,
  //   text:'Đăng Ký',
  //   url:'/DangKy'
  // }
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Nhiệm vụ',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'Tầm nhìn',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'Lịch sử',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const products_url = 'http://127.0.0.1:8000/SanPham/'
export const single_product_url = `https://course-api.com/react-store-single-product?id=`


// API ban dau 
// export const products_url = 'https://course-api.com/react-store-products'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`