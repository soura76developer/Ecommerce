import CarouselFunc from '../components/UncontrolledExample'
import images_folder from '../images/corousel_3.png';


const RecentSearch=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 pt-2 text-center">
                    <img src={images_folder} className="" style={{width:"100vw"}} />
                </div>
                <div className="col-md-12 pt-2 text-center justify-content-center">
                    <p className="mt-2 headers_style">Current Active Users</p>
                    <CarouselFunc />  {/* importing the carousel component */}
                   
                </div>
            </div>
        </div>

        </>
    )
}
export default RecentSearch;