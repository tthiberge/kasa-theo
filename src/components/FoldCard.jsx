import { useState } from 'react'




function FoldCard({title} ) {

  const [unfold, setUnfold] = useState(false)
  console.log(unfold)

  return (
    <div className='container-foldable'>
      <div className='unfold-description'>
        <p>{title}</p>
      </div>

      { unfold ? (
      <div className='unfold-content'>
        {title}
      </div>
      ) : null
      }
    </div>

  )
}


export default FoldCard
