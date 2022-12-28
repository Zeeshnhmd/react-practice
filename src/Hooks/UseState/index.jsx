import { Button, Input } from "antd";

import { useState } from "react";

const UseStateHook = () => {
  const [number, setNumber] = useState(0);
  const [users, setUsers] = useState({
    name: "Zeeshan",
    email: "zeeshan@fds.co",
    phone: 1234567890,
  });
  const [input, setInput] = useState("");

  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  const decrement = () => {
    setNumber((prev) => prev - 1);
  };

  const asyncIncrement = () => {
    setTimeout(() => {
      setNumber((prev) => prev + 1);
    }, 2000);
  };

  const changeUser = () => {
    setUsers({ ...users, name: input });
  };

  return (
    <>
      <div>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={asyncIncrement}>AsyncIncrement</Button>

        <h1>{number}</h1>
      </div>

      <div>
        <h1>User name: {users.name}</h1>
        <h1>User name: {users.email}</h1>
        <h1>User name: {users.phone}</h1>

        <Input onChange={(e) => setInput(e.target.value)} />
        <Button onClick={changeUser}>Change user</Button>
      </div>
    </>
  );
};

export default UseStateHook;
