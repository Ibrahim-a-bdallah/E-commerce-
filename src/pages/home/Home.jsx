import { useDispatch, useSelector } from "react-redux"


const Home = () => {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.products);
  console.log(products)
  return (
    <div><button onClick={dispatch}>click here</button></div>
  )
}

export default Home