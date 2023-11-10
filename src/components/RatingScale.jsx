
import star_full from '../data/star_full.png'
import star_empty from '../data/star_empty.png'



function RatingScale( {scaleValue}) {
  const range =  [1, 2, 3, 4, 5]
  return (
    <div className='rating-scale'>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? (
          <span key={rangeElement.toString()}>
            <img src={star_full} alt="star full" />
          </span>
          )
          :
          (<span key={rangeElement.toString()}>
            <img src={star_empty} alt="star empty" />
          </span>)

        )}
    </div>
  )
}


export default RatingScale
