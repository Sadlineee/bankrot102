import { ReviewBox, ReviewEl, ReviewStars, ReviewSum, ServiceTitle, Star } from './Review.styled'

const ReviewData = [
  {
    id: 1,
    title: 'Яндекс',
    sum: '257 отзывов'
  },

  {
    id: 2,
    title: 'Google',
    sum: '144 отзыва'
  },

  {
    id: 3,
    title: '2ГИС',
    sum: '74 отзыва'
  }
]

export default function Review() {
  return (
    <ReviewBox>
      {ReviewData.map((el) => (
        <ReviewEl key={el.id}>
          <ServiceTitle>{el.title}</ServiceTitle>
          <ReviewStars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </ReviewStars>
          <ReviewSum>{el.sum}</ReviewSum>
        </ReviewEl>
      ))}
    </ReviewBox>
  )
}