import { useState } from 'react'
import arrow_folded from '../data/arrow_back.png'
import arrow_unfolded from '../data/arrow_front.png'




function FoldCard({title, item, unfoldItem, setUnfoldItem} ) {

  return (
    <div className='container-foldable'>
      <div className='unfold-title'>
        <p>{title}</p>
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
        <p>{item}</p>
      </div>
      ) : null
      }
    </div>

  )
}


export default FoldCard
