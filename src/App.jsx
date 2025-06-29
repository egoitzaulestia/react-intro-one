import "./App.css";
import PersonaFunc2 from "./components/PersonaFunc2";
import PersonClass from "./components/PersonClass";
import PersonClass2 from "./components/PersonClass2";
import PersonFunc from "./components/PersonFunc";

const names = ["Eren", "Armin", "Mikasa", "Reiner", "Levi", "Annie"];
const surnames = [
  "Yeager",
  "Arlert",
  "Ackermann",
  "Braun",
  "Ackermann",
  "Leonhart",
];
const ages = [19, 19, 19, 21, 34, 20];

const people = [
  { name: "Eren", surname: "Yeager", age: 19 },
  { name: "Armin", surname: "Arlert", age: 19 },
  { name: "Mikasa", surname: "Ackermann", age: 19 },
  { name: "Reiner", surname: "Braun", age: 21 },
  { name: "Levi", surname: "Ackermann", age: 34 },
  { name: "Annie", surname: "Leonhart", age: 20 },
];

function App() {
  return (
    <>
      <div>
        <h2>Function Component</h2>
        {people.map((person, index) => {
          return <PersonFunc key={index} {...person} />;
        })}
        <br />
        <hr />

        <h2>Class Component</h2>
        {people.map((person, index) => {
          return <PersonClass key={index} {...person} />;
        })}
        <br />
        <hr />

        <h2>Function Component 2</h2>
        {names.map((name, index) => (
          <PersonaFunc2
            key={index}
            name={name}
            surname={surnames[index]}
            age={ages[index]}
          />
        ))}
        <br />
        <hr />

        <h2>Class Component 2</h2>
        <ul>
          {names.map((name, index) => (
            <li>
              <PersonClass2
                key={index}
                name={name}
                surname={surnames[index]}
                age={ages[index]}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
