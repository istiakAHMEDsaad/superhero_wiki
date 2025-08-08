import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from './Slide';

import slideImageOne from '../assets/img1.jpg';
import slideImageTwo from '../assets/img2.jpg';
import slideImageThree from '../assets/img3.jpg';

const Carousel = () => {
  return (
    <div className='container mx-auto px-6 py-10'>
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {/* Slide 1 */}
        <SwiperSlide>
            <Slide image={slideImageOne} text='Deadpool'/>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
            <Slide image={slideImageTwo} text='Batman'/>
        </SwiperSlide>
        
        {/* Slide 3 */}
        <SwiperSlide>
            <Slide image={slideImageThree} text='Ironman'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
