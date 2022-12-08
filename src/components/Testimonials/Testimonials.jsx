import React from 'react'
import css from "./Testimonials.module.css"
import Hero from "../../assets/testimonialHero.png"
import { TestimonialsData } from "../../data/testimonials"
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import { Pagination, Navigation } from 'swiper'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

const Testimonials = () => {
    return (
        <div className={css.Testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>

                    <span>Top Rated</span>
                    <span>Lorem ipsum dolor sit. Lorem, ipsum dolor. </span>
                </div>
                <img src={Hero} alt="hero" />
                <div className={css.container}>
                    <span>100K</span>
                    <span>Happy Customers With Us</span>
                </div>
            </div>
            <div className={css.reviews}>reviews</div>
            <div className={css.carousel}>
                <Swiper
                    //  modules={[Pagination, Navigation]}
                    //  className='mySwiper'
                    //  navigation={true}
                    //  loopFillGroupWithBlank={true}
     
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={15}
                    className={css.tCarousal}
                    // loop={true}
                    >
                    {
                        
                        TestimonialsData.map((testimonial, i) => (
                            <SwiperSlide key={i}>
                                
                                <div className={css.testimonial}>
                                    <img src={testimonial.image} alt="" />
                                    <span>{testimonial.comment}</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
