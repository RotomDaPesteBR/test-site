import styles from '../styles/index.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y , Autoplay} from 'swiper';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
    return  <div className={styles.container}>
                <div className={styles.navbar}></div>
                
                <div className={styles.carousel}>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    loop={true}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><img src="https://setlivewallpaper.com/wp-content/uploads/2021/12/Mobius-Honkai-Impact-3-thumb.jpg" class="d-block w-100" alt="..."/></SwiperSlide>
                    <SwiperSlide><img src="https://www.pockettactics.com/wp-content/uploads/2021/10/honkai-impact-5-2.jpg" class="d-block w-100" alt="..."/></SwiperSlide>
                    <SwiperSlide><img src="https://media.discordapp.net/attachments/713753403205091478/967159089325043823/unknown.png?width=1202&height=676" class="d-block w-100" alt="..."/></SwiperSlide>
                </Swiper>

                </div>
            </div>
}

export default Home

/*              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://setlivewallpaper.com/wp-content/uploads/2021/12/Mobius-Honkai-Impact-3-thumb.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.pockettactics.com/wp-content/uploads/2021/10/honkai-impact-5-2.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://d3fd5j8wprxn3h.cloudfront.net/wp-content/uploads/2021/09/Screen-Shot-2021-09-29-at-9.22.25-AM.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */