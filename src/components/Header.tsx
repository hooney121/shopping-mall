'use client'

import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa"

export default function Header() {
  return (
    <header className="bg-white shadow flex flex-col items-center py-4">
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
      {/* 메뉴바 */}
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