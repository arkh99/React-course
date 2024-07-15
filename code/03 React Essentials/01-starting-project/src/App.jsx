import { useState } from 'react';
import { CORE_CONCEPTS } from "./data.js";
import { Header } from "./Components/Header.jsx";
import { CoreConcept } from "./Components/CoreConcept.jsx";
import { TapButton } from "./Components/TapButton.jsx";
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic , setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  } 

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((x) => <CoreConcept key={x.title} {...x}></CoreConcept>)}
          </ul>
        </section>
        <section id="examples">
          <h2>exampels</h2>
          <menu>
            <TapButton isSelected = {selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TapButton>
            <TapButton isSelected = {selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TapButton>
            <TapButton isSelected = {selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TapButton>
            <TapButton isSelected = {selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TapButton>
          </menu>
          {selectedTopic
            ? 
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p> {EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
            :
            <p>Please select a topic</p>
         }

        </section>
      </main>
    </div>
  );
}

export default App;

