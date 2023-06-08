import { useEffect, useState } from "react";

const Teletubbies = () => {
  const [teletubbies, setTeletubbies] = useState([]);
  useEffect(() => {
    fetch("/teletubbies.json")
      .then((response) => response.json())
      .then((data) => {
        setTeletubbies(data);
      });
  }, []);
  console.log(teletubbies);
  return (
    <>
      <h1>Hellow World!</h1>
    </>
  );
};
export default Teletubbies;
