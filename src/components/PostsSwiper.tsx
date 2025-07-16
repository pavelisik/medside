import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { WPBolezniMetadata } from '../types/wpTypes';
import 'swiper/css';
import 'swiper/css/navigation';
import '../assets/styles/swiper.css';

interface PostsSwiperProps {
    drugs?: WPBolezniMetadata['drugs'];
}

const PostsSwiper = ({ drugs }: PostsSwiperProps) => {
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="swiper-block">
            <div ref={prevRef} className="swiper-prev" role="button" aria-label="Назад"></div>
            <div ref={nextRef} className="swiper-next" role="button" aria-label="Вперед"></div>
            <Swiper
                className="swiper-drugs"
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                spaceBetween={0}
                slidesPerView={4}
                watchOverflow
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
            >
                {drugs?.map((post) => (
                    <SwiperSlide key={post.id}>
                        <a href={`/${post.slug}`} title={post.name} target="_blank" rel="noopener noreferrer">
                            <img src={post.image} alt={post.name} loading="lazy" />
                            {post.name}
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PostsSwiper;
