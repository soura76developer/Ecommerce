
import { useState,useEffect } from 'react';
import Header from '../components/include/Header.js';
import RecentSearch from '../components/RecentSearch.js';
import '../css/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {useDispatch,useSelector} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {increment} from '../redux_elements/slice2.js'

//import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
//import img1  from "../images/Products/Apple_homepod-mini-white.png"
import stacticData from './product.json';
// import {increment} from '../redux_elements/slice.js'
// import Button from 'react-bootstrap/Button';


const ProductListing = ()=>{

    //All variable
    // var dataSets=[];

    // use Dispatch Function
    const dispatch=useDispatch();

    //All states
    const [modaldata , setModaldata] = useState({});
    const [show, setShow] = useState(false);
    const [data , setData] = useState([]);

    useEffect(()=>{
        setData(dataSets);
    },[])


    //All selector

    const dataSets=useSelector((data_from_store)=>{
        return data_from_store.reducerKey2.values;
    })
    
    // const [data , setData] = useState(dataSets);
    const dataApiSets=useSelector((data_from_store)=>{
        return data_from_store.reducerKey.data;
    })
    
    
    //Modal Functions
    const handleClose = () => setShow(false);
    
    const handleShow = (e) => {
        setShow(true);

        const attributeVal=(e.target.getAttribute("attribute-value").toString());
        const storedItemsClick = data.filter((item)=>{
            if(item._id.$oid.toString().includes(attributeVal.toString())){
                return  setModaldata(item);
            }
        })
    }
  
    //Filter Function

    //In this function,use two JS functions: the first filter and the second filter.
    //Getting the data from the Redux store through the useSelector method.
    //Applying filter method on it.
    //Inside filter function, i used include function, 
    // Inside includes data I am getting from the "filterParams" state,first setting it to lower case,so that if any data is in uppercase, I convert it to lower case before checking for the data.    // If it gets the match it will return the elements and push it into the array. 
    //The filter function creates a new array; it does not change the old array.


     const [filterParams,setFilterParams]=useState("")

     const filtered_data= data.filter((data_flt)=>{ 
        // console.log("Data Comes here")
        if(filterParams != null ){
            if(typeof (filterParams) ==="string"){
                return data_flt.main_category.toLowerCase().includes(filterParams.toLowerCase());
            }
        }else{
            return data_flt;
        }
     })

     //This function keep track of the  changes in input field.
     //And update it to the state.
     function sendUpdatedFltData(e){
        setFilterParams(e.target.value)
     }
    //Filter function

return(
    <>
        <Header />
        <RecentSearch />
        <div className="container-fluid mt-5" >
            <div className="row">
                <div className="col-md-6 text-start">
                   
                </div>
                <div className="col-md-12 text-end filter_box p-3">
                    <input type="text" className="filter_box_style" value={filterParams} onChange={sendUpdatedFltData} placeholder='Example: mobile/headphones/smartwatc'/>
                </div>
            </div>
            <div className='row mt-1 p-3 gx-5 gy-5'>
                {
                    filtered_data.map((value,key)=>{
                        // console.log(value);
                        const image_data= value.image;
                        const ratings_var= Number(value.ratings)
                        return(
                            <div className='col-md-3  justify-content-center'  key={key} >
                                <div className="row plCard pb-1 py-4">
                                    <div className="col-md-12 text-center pt-2">
                                        <img src={image_data} className="crd_img_style"/>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <p className="crd_name_style">{value.name}</p>
                                    </div>
                                    <div className="col-md-12 text-center ratings_star">
                                        {
                                            (ratings_var>=1 && ratings_var < 2) && 
                                            <p>
                                                <FontAwesomeIcon icon={faStar} />
                                            </p>
                                        }
                                        {
                                            (ratings_var>=2 && ratings_var < 3) && 
                                            <p>
                                                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                                            </p>
                                        }
                                        {
                                            (ratings_var>=3 && ratings_var < 4) && 
                                            <p>
                                                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                                            </p>
                                        }
                                        {
                                            (ratings_var>=4 && ratings_var < 5) && 
                                            <p>
                                                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                                            </p>
                                        }
                                        {
                                            (ratings_var==5) && 
                                            <p>
                                                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                                            </p>
                                        }
                                    </div>
                                    <div className="col-md-12 text-center pb-3">
                                        <p className="crd_prc_style">
                                            <FontAwesomeIcon icon={faRupeeSign} className="me-1"/> 
                                            30,000
                                        </p>
                                        <button className="show_more_details_sty" attribute-value={value._id.$oid} onClick={handleShow}>
                                            Show More
                                        </button>
                                    </div>
                                  
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>

                                            </Modal.Header>
                                            <Modal.Body>
                                                        <div className="col-md-12 text-center">
                                                            <img src={modaldata.image} className="modal_img_style" alt="" style={{}}/>
                                                        </div>
                                                        <div className="col-md-12 text-center mt-3">
                                                            <p className="modal_details_style">{modaldata.name}</p>
                                                            <p className="modal_details_style">Price ₹ {modaldata.actual_price}</p>
                                        
                                                            <p className="modal_details_style">Category: {modaldata.main_category}</p>
                                                            <p className="modal_details_style"><FontAwesomeIcon icon={faHeart} /> {modaldata.no_of_ratings}</p>
                                                            <p className="modal_details_style" style={{color:"green"}}>Offer Price ₹ {modaldata.discount_price}</p>
                                                        </div>
                                                        <div className="col-md-12 mt-2 text-center">
                                                            <button className="show_more_details_sty" onClick={handleClose}>
                                                                Pay ₹ {modaldata.discount_price}
                                                            </button>
                                                        </div>
                                            </Modal.Body>

                                        </Modal>
                                   
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            {/* For redux thunk purpose*/}

            {/* <div className="row mt-1">
                <div className="col-md-12">
                <button onClick={()=>dispatch(fetchApiData())}>Add/reduce</button>
                <button onClick={()=>dispatch(increment(stacticData))}>Add static json</button>
                    {

                        dataApiSets.data && dataApiSets.data.map((value,key)=>{
                            return(
                                <>
                                    <p>{value.first_name}</p>
                                    
                                </>
                            )
                        })
                    }
                </div>
            </div> */}
        </div>
    </>
)

}

export default ProductListing;