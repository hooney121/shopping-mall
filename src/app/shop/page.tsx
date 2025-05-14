"use client"

import { useEffect, useState } from "react"
import { supabase } from '@/lib/supabase'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa"

// 상단 보라색 알림바
function TopNoticeBar() {
  return (
    <div className="bg-purple-800 text-white text-center py-2 text-sm font-semibold">
      지금 가입하고 <b>최대 1만원 할인 쿠폰</b> 받아가세요!
    </div>
  )
}

// 헤더(로고, 메뉴, 검색창, 아이콘, 카테고리)
function Header() {
  return (
    <header className="bg-white shadow flex flex-col items-center py-4 mb-4">
      <div className="flex w-full max-w-6xl items-center justify-between">
        {/* 로고/메뉴 */}
        <div className="flex items-center gap-8">
          <span className="text-3xl font-extrabold text-purple-700 font-cursive">Kurly</span>
          <nav className="hidden md:flex gap-6 text-lg font-semibold text-gray-700">
            <a href="#">마켓컬리</a>
            <a href="#">뷰티컬리</a>
          </nav>
        </div>
        {/* 아이콘 */}
        <div className="flex items-center gap-6 text-xl text-gray-700">
          <a href="#"><FaUser /></a>
          <a href="#"><FaHeart /></a>
          <a href="#"><FaShoppingCart /></a>
        </div>
      </div>
      {/* 검색창 */}
      <div className="w-full max-w-2xl mt-4">
        <input
          className="w-full border-2 border-purple-400 rounded-full px-6 py-2 focus:outline-none focus:border-purple-700 transition"
          placeholder="검색어를 입력해주세요"
        />
      </div>
      {/* 카테고리 바 */}
      <div className="flex gap-8 mt-4 text-base font-semibold text-gray-700">
        <a href="#">카테고리</a>
        <a href="#">신상품</a>
        <a href="#">베스트</a>
        <a href="#">알뜰쇼핑</a>
        <a href="#">특가/혜택</a>
      </div>
    </header>
  )
}

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: false })
      if (error) setError(error.message)
      else setProducts(data || [])
    }
    fetchProducts()
  }, [])

  if (error) {
    return <div>상품을 불러오는 중 오류가 발생했습니다: {error}</div>
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNoticeBar />
      <Header />

      {/* 메인 배너 */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="rounded-xl mb-8"
        >
          <SwiperSlide>
            <img src="/banner1.jpg" alt="배너1" className="w-full h-64 object-cover rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/banner2.jpg" alt="배너2" className="w-full h-64 object-cover rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/banner3.jpg" alt="배너3" className="w-full h-64 object-cover rounded-xl" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 상품 목록 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">상품 목록</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-sm bg-white">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold">{product.price.toLocaleString()}원</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}