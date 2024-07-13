const reatcDesc = ["fundemental", "core", "crucial"];
import reactImg from "../assets/react-core-concepts.png";
import './Header.css'

function random(num) {
  return Math.floor(Math.random() * num);
}

export function Header() {
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