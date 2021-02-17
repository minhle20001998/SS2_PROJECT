import React from 'react';
import './slideShow.style.css';
import { Slide } from 'react-slideshow-image';
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import 'react-slideshow-image/dist/styles.css'

// update nào 
const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};
const Slideshow = () => {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <div className="each-slide">
          <div>
            <img src= 'http://file.hstatic.net/1000230642/article/78951242_2706839339540033_1127497424223338496_o__1__f0b00923cec04c8099b579afc333f0c0.jpg' alt="img1" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src='https://i1.wp.com/sneakerdaily.vn/wp-content/uploads/2020/07/102665190_2857788107778488_5741593314440773632_o.jpg?fit=1300%2C871&ssl=1' alt="img2" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src='https://genk.mediacdn.vn/2017/20024186-1524054434283082-687936166393440480-o-1500351065869.jpg' alt="img3" />
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
