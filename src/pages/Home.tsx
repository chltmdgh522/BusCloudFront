import Button from "../components/Button";
import Card from "../components/Card";
import Checkbox from "../components/CheckBox";
import Switch from "../components/Switch";
import TextInput from "../components/TextInput";
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
      <hr />
      <TextInput label="출발지" value="인풋내용" />
      <hr />
      <Switch selected={count % 2 == 0} onToggle={() => {}} />
      <hr />
      <Checkbox checked={count % 2 == 0} onToggle={() => {}} />
      <hr />
      <Card
        title="목적지"
        departure="제주공항"
        destination="제주시청"
        buses={[
          {
            busNumber: "100",
            color: "red",
            stops: 3,
          },
          {
            busNumber: "101",
            color: "green",
            stops: 5,
          },
        ]}
        isAlertEnabled={true}
      />
      <Card
        title="목적지"
        departure="제주공항"
        destination="제주시청"
        alertTime="12:00 ~ 15:00"
        alertStop={3}
        isAlertEnabled={true}
        onToggleAlert={() => {}}
        onDeleteAlert={() => {}}
      />
    </>
  );
};

export default Home;
