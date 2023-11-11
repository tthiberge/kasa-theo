import arrow_folded from '../data/arrow_back.png'
import arrow_unfolded from '../data/arrow_front.png'

function FoldCard({title, item, unfoldItem, setUnfoldItem, fontSize, lineHeight} ) {

  const style = {
    fontSize: fontSize ? fontSize : '18px',
    lineHeight: lineHeight ? lineHeight : '25px'
  }

  console.log(fontSize)
  console.log(style)

  return (
    <div className='container-foldable'>
      <div className='unfold-title'>
        <p style={style}>{title}</p>
        <span
          onClick={() => setUnfoldItem(!unfoldItem)}
        >

          { unfoldItem ? (<img src={arrow_unfolded} alt="open message" />)
            :
            (<img src={arrow_folded} alt="open message" />
          )}
        </span>
      </div>

      { unfoldItem ? (
      <div className='unfold-content' >
        <p style={style}>{item}</p>
      </div>
      ) : null
      }
    </div>

  )
}


export default FoldCard
