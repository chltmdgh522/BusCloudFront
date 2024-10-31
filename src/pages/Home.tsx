import Button from "../components/Button";
import { counterState } from "../atoms";
import { useRecoilState } from "recoil";

const Home = () => {
  const [count, setCount] = useRecoilState(counterState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div>Home</div>
      <div>
        <h2>카운터</h2>
        <p>{count}</p>
        <div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
      <Button size="large">버튼</Button>
    </>
  );
};

export default Home;
