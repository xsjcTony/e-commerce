import { Skeleton, Swiper } from 'antd-mobile'
import clsx from 'clsx'
import { memo } from 'react'
import styles from './Carousel.module.scss'
import type { BannerItem } from '..'


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
const Carousel = ({ bannerItems, className = void 0 }: CarouselProps): JSX.Element => (
  <Swiper
    autoplay
    loop
    className={className}
    indicatorProps={{ className: styles.indicator }}
  >
    {
      bannerItems.length !== 0
        ? bannerItems.map(item => (
          <Swiper.Item key={item.id}>
            <a
              className={styles.item}
              href={item.url}
              rel="noreferrer noopener"
              target="_blank"
            >
              <img alt={item.title} className={styles.itemImage} src={item.image} />
            </a>
          </Swiper.Item>
        ))
        : (
          <Swiper.Item>
            <Skeleton animated className={clsx(styles.item, styles.skeleton)} />
          </Swiper.Item>
        )
    }
  </Swiper>
)

export default memo(Carousel)
