import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/APad.png';
import img2 from '../images/apple_iPod_2A.png';
import img3 from '../images/applePod.png';

//Using bootstrap carousel

function UncontrolledExample() {
  return (
    // <div className="container-fluid"> 
        <div className="row justify-content-center">
              <div className="col-md-10" style={{}}>
              <Carousel data-bs-theme="dark" className="p-3" >
                <Carousel.Item>
                  <img
                    className="corousel_sizes"
                    src={img1}
                    alt="First slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                      className="corousel_sizes"
                      src={img2}
                      alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item className="justify-content-center">
                    <img
                      className="corousel_sizes"
                      src={img3}
                      alt="Third slide"
                    />
                </Carousel.Item>
              </Carousel>
              </div>
        </div>
    // </div>
  );
}

export default UncontrolledExample;