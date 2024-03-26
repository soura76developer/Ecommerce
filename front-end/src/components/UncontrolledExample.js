import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/APad.png';
import img2 from '../images/apple_iPod_2A.png';
import img3 from '../images/applePod.png';
import {useDispatch,useSelector} from 'react-redux';
import {fetchApiData} from '../redux_elements/slice'
import {useEffect } from 'react';

//Using bootstrap carousel

function UncontrolledExample() {
  
  var dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(fetchApiData());
  },[])

  var apiData = useSelector(
    (storeD)=>{
      return storeD.reducerKey.data
    }
  );
  return (
    // <div className="container-fluid"> 
        <div className="row justify-content-center">
              <div className="col-md-10" style={{}}>
              <Carousel data-bs-theme="dark" className="p-3" >
                {
                  apiData && apiData.data.map((value,key)=>{
                    return(
                      <Carousel.Item className="mb-5">
                          <img style={{width:"15vw",height:"40vh",borderRadius:"50%",border:"5px solid green"}}
                            className="corousel_sizes p-1"
                            src={value.avatar}
                            alt="First slide"
                          />
                         <p>{value.first_name}</p>

                      </Carousel.Item>
                    )
                  })
                }
                
              </Carousel>
              </div>
        </div>
    // </div>
  );
}

export default UncontrolledExample;