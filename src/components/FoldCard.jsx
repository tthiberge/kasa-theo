import arrow_folded from '../data/arrow_back.png'
import arrow_unfolded from '../data/arrow_front.png'

function FoldCard({title, item, unfoldItem, setUnfoldItem, size} ) {

  const fontSize = {
    fontSize: size ? '24px' : '18px'
  }

  console.log(size)
  console.log(fontSize)

  return (
    <div className='container-foldable'>
      <div className='unfold-title'>
        <p style={fontSize}>{title}</p>
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
        <p style={fontSize}>{item}</p>
      </div>
      ) : null
      }
    </div>

  )
}


export default FoldCard
