import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import slideImageOne from '../assets/img1.jpg';
import slideImageTwo from '../assets/img2.jpg';
import slideImageThree from '../assets/img3.jpg';

const slideData = [
  {
    imgSrc: "../assets/img1.jpg",
    title: 'Deadpool',
    description:
      'Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name. Directed by Tim Miller (in his directorial debut) and written by Rhett Reese and Paul Wernick, it is a spin-off of the X-Men film series and its overall eighth installment',
    categories: ['Marvel Studios', 'Superhero'],
  },
  {
    imgSrc: { slideImageTwo },
    title: 'Batman',
    description:
      'Batman is a superhero who appears in American comic books published by DC Comics. Batman was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.',
    categories: ['DC Universe', 'Superhero'],
  },
  {
    imgSrc: { slideImageThree },
    title: 'Ironman',
    description:
      'Iron Man is a superhero appearing in American comic books published by Marvel Comics. Co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby, the character first appeared in Tales of Suspense #39 in 1962',
    categories: ['Marvel Studios', 'Superhero'],
  },
];

const Slider = () => {
  return (
    <main>
      <div className='container'>
        <Swiper modules={[Pagination]}>
          {slideData.map((slide, index) => {
            <SwiperSlide key={index}>
              <img src={slide.imgSrc} alt={slide.title} />
              <div className='title'>
                <h1>{slide.title}</h1>
              </div>
              <div className='content'>
                <div className='text-box'>
                  <p className='footer'>{slide.description}</p>
                </div>
                <div className='footer'>
                  <div className='category'>
                    {slide.categories.map((category, idx) => (
                      <span key={idx} style={{ '--i': idx + 1 }}>
                        {category}{' '}
                      </span>
                    ))}
                  </div>
                  <button>
                    <span className='label'>More...</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>;
          })}
        </Swiper>
      </div>
    </main>
  );
};

export default Slider;
