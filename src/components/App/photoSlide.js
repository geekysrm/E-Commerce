import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import '../../style/photoSlide.css';

const styles = {
  photo: {
    height: 450,
    width: '100%',
  },
};

export default function Navbar() {
  return (
    <div>
      <div style={{ paddingTop: 50 }}>
        <Carousel autoplay>
          <div>
            <img
              style={styles.photo}
              src="./assets/PhotoSlideRado.jpg"
              alt="rado"
            />
          </div>
          <div>
            <img
              style={styles.photo}
              src="./assets/PhotoSlideTissot.jpg"
              alt="tissot"
            />
          </div>
          <div>
            <img
              style={styles.photo}
              src="./assets/PhotoSlideTissot1.jpg"
              alt="tissot"
            />
          </div>
          <div>
            <img
              style={styles.photo}
              src="./assets/PhotoSlideFossil.gif"
              alt="fossil"
            />
          </div>
        </Carousel>
      </div>
    </div>
  )
}



