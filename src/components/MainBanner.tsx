'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

export default function MainBanner() {
  return (
    <div className="my-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="rounded-xl"
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
  )
}