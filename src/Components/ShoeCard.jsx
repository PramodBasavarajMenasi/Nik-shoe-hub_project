import { thumbnailShoe1 ,thumbnailShoe2,thumbnailShoe3 } from "../assets/images"
const ShoeCard = ({ imgURl,changeBigShoeImage ,bigShoeImg}) => {

  const handleClick = () =>{
    if(bigShoeImg !== imgURl.bigShoe){
        changeBigShoeImage(imgURl.bigShoe)
    }
  }  

  return (
    <div className={`border-2 rounded-xl 
     ${bigShoeImg === imgURl.bigShoe
        ? 'border-coral-red  hover:ring-stone-950 hover:brightness-105  hover:saturate-105 hover:backdrop-brightness-200 contrast-100':'border-transparent'
     } cusror-pointer max-sm:flex-1
    `}
     onClick={handleClick}
    >
        
       <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4  ">
        <img src={imgURl.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain hover:ring-stone-950  hover:brightness-105 saturate-auto hover:saturate-200 contrast-100"/>
       </div>
    </div>
  );
};

export default ShoeCard;
