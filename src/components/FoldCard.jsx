import { useState } from 'react'
import arrow_folded from '../data/arrow_back.png'
import arrow_unfolded from '../data/arrow_front.png'




function FoldCard({title, item, itemType, unfoldItem, setUnfoldItem} ) {

  console.log(unfoldItem)

  return (
    <div className='container-foldable'>
      <div className='unfold-description'>
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
      <div className='unfold-content'>
        {item}
      </div>
      ) : null
      }
    </div>

  )
}


export default FoldCard
