import PopBob from "@/components/popbob/index";
import { useParams } from "react-router-dom"


const Category = () => {
  const { category } = useParams();
  
    console.log(category)
  return (
    <div><PopBob/></div> 
  )
}

export default Category