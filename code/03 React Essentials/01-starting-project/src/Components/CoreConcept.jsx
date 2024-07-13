export function CoreConcept({image, para, title}) {
    return (
      <li>
        <img src={image} alt="..." />
        <h3>{title}</h3>
        <p>{para}</p>
      </li>
    );
  }