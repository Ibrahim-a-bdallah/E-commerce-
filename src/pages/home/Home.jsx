import { useDispatch, useSelector } from "react-redux"
import actGetProducts from "../../store/products/actGetProduct";
import { useEffect } from "react";
import Loading from "../../components/feedback/Loading/Loading";


const Home = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() =>
  {
    dispatch(actGetProducts())
    }, [dispatch])

  
  return (
    <div>
      <Loading loading={loading} error={error} >
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
        </Loading>
    </div>
  );
}

export default Home