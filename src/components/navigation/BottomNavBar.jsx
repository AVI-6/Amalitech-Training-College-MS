import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";

function BottomNavBar({ totalPages }) {
  return (
    <div className='buttom-navbar-div'>
      <div className="left-bottom-nav-content">
        <h2>Showing 1-9 of 3000 results</h2>
      </div>
      <div className="right-bottom-nav-content">
        <div className="left-arrow">
          <MdArrowLeft />
        </div>
        <div className="current-page">
          <h3 className='current-page-number active'>1</h3>
          <h3 className='current-page-number'>2</h3>
          <h3 className='current-page-number'>3</h3>
          <h3 className='current-page-number'>4</h3>
          <h3 className='current-page-number distance'></h3>
          <h3 className='current-page-number'>{totalPages}</h3>
        </div>
        <div className="right-arrow">
          <MdArrowRight />
        </div>
      </div>
    </div>
  )
}

export default BottomNavBar
