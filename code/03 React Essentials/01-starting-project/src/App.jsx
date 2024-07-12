import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reatcDesc = ["fundemental", "core", "crucial"];

function random(num) {
  return Math.floor(Math.random() * num);
}

function Header() {
  const desc = reatcDesc[random(reatcDesc.length)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

function CoreConcept({image, para, title}) {
  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <p>{para}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
