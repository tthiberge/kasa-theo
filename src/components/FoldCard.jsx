import arrow_folded from '../data/arrow_back.png'
import arrow_unfolded from '../data/arrow_front.png'

function FoldCard({title, item, unfoldItem, setUnfoldItem, itemType} ) {
  const isMobile = window.innerWidth < 640

  const style = {
    location: {
      desktop: {
        title: {
          fontSize: "18px",
        },
        content: {
          fontSize: "18px",
          padding: "30px 12px 53px 20px",
        }
      },
      mobile: {
        title: {
          fontSize: "13px",
        },
        content: {
          fontSize: "13px",
          padding: "17px 7px 8px 12px",
        }
      }
    },
    about: {
      desktop: {
        title: {
          fontSize: "24px",
        },
        content: {
          fontSize: "24px",
          padding: "27px 27px 19px 18px",
        }
      },
      mobile: {
        title: {
          fontSize: "13px",
        },
        content: {
          fontSize: "12px",
          padding: "17px 7px 53px 12px",
        }
      }
    },

  }

  return (
    <div className='container-foldable'>
      <div className='unfold-title'>
        <p style={style[itemType][isMobile ? 'mobile' : 'desktop'].title}>{title}</p>
          <div className='arrow-container'>
            <img
            src={arrow_folded}
            className={ unfoldItem ? 'arrow rotate-left' : 'arrow rotate-right' }
            onClick={() => setUnfoldItem(!unfoldItem)}
            alt="open message"
            />
          </div>
      </div>

        <div className={ unfoldItem ? 'unfold-text-container' : '' }>
          <div className='animated-div' >
              <p style={style[itemType][isMobile ? 'mobile' : 'desktop'].content}>{item}</p>
          </div>
        </div>
    </div>

)
}

export default FoldCard
