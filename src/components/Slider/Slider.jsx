import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SliderProducts } from "../../data/products"
import './Slider.css'

const Slider = () => {
    return (
        <div ClassName="s-container">
            <Swiper
                modules={[Pagination, Navigation]}
                className='mySwiper'
                navigation={true}
                loopFillGroupWithBlank={true}

                slidesPerView={3}
                spaceBetween={40}
                 slidesPerGroup={1}
                loop={true}
            >
                {SliderProducts.map((slide, i) => (

                    <SwiperSlide>
                        <div className="left-s">
                            <di className="name">
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>

                            </di>
                            <span>{slide.price}$</span>
                            <div>Shop Now</div>
                        </div>
                        <img src={slide.img} alt="product" className='img-p' />

                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Slider
