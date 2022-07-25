import { Image, Skeleton, Swiper } from 'antd-mobile'
import clsx from 'clsx'
import { memo } from 'react'
import styles from './Carousel.module.scss'
import type { BannerItem } from '@/features/banner'


/**
 * Types
 */
interface CarouselProps {
  bannerItems: BannerItem[]
  className?: string
}


/**
 * Component
 */
const Carousel = ({ bannerItems, className = void 0 }: CarouselProps): JSX.Element =>
  bannerItems.length !== 0
    ? (
      <Swiper
        autoplay
        loop
        className={className}
        indicatorProps={{ className: styles.indicator }}
      >
        {bannerItems.map(item => (
          <Swiper.Item key={item.id}>
            <a
              className={styles.item}
              href={item.url ? item.url : void 0}
              rel="noreferrer noopener"
              target="_blank"
            >
              <Image
                alt={item.description}
                src={item.image}
              />
            </a>
          </Swiper.Item>
        ))}
      </Swiper>
    )
    : <Skeleton animated className={clsx(styles.item, styles.skeleton, className)} />


export default memo(Carousel)
