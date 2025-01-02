import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData}= props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    } =  resData?.info;
    const{
        deliveryTime,
    } = resData?.info.sla
    {cloudinaryImageId}
    return(
        <div className="res-card">
            <img
            className="res-logo"
            alt="res-logo"
            src={CDN_URL
                 + 
                resData.info.cloudinaryImageId
            }
            />
 <h3>{name}</h3>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{cuisines.join(", ")}</h4>
        </div>
    )
}

export default RestaurantCard