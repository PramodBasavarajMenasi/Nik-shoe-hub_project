import { star } from "../assets/icons"


const ReviewCard = (imgURL,customerName ,rating ,feedback) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img 
        src={imgURL.imgURL} alt="customer"  
         className="rounded-full saturate-100 object-cover w-[120px] h-[120px] hover:cursor-pointer hover:w-[140px] hover:h-[140%] transition-all"
        />
     <p className="mt-6 max-w-sm text-center info-text">{imgURL.feedback}</p>
     <div className="mt-3 flex justify-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0 " />
           <p className="text-xl font-montserrat text-slate-gray">({imgURL.rating})</p> 
     </div>
     <h3 className="mt-1 font-palanquin text-3xl text-center font-bold hover:text-4xl">{imgURL.customerName}</h3>
    </div>
  )
}

export default ReviewCard
