import "./App.css";
import PersonFunc from "./components/PersonFunc";

const people = [
  { name: "Eren", surname: "Yeager", age: 19 },
  { name: "Armin", surname: "Arlert", age: 19 },
  { name: "Mikasa", surname: "Ackermann", age: 19 },
  { name: "Reiner", surname: "Braun", age: 21 },
  { name: "Levi", surname: "Ackermann", age: 34 },
  { name: "Erwin", surname: "Smith", age: 35 },
];

function App() {
  return (
    <>
      <div>
        {people.map((person, index) => {
          return <PersonFunc key={index} {...person} />;
        })}
      </div>
    </>
  );
}

export default App;
