import Lottie from "lottie-react";

import error from '../../../assets/lottiefiles/error.json';
import notFound from '../../../assets/lottiefiles/notfound.json';
import loading from '../../../assets/lottiefiles/loading.json';
import networkError from '../../../assets/lottiefiles/network.json';
const errorType = {
  "notFound": notFound,
  "error": error,
  "loading": loading,
  "networkError" : networkError
}
const LottieHandler = ({ type, message }) => {
  
    return (
      <div className="flex justify-center items-center gap-3 flex-col ">
        <Lottie className=" w-[250px] md:w-[500px] " animationData={errorType[type]} loop={true} />
        {message &&
        <p>{message}</p>
        }
      </div>
  )
}

export default LottieHandler