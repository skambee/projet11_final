// Génère la liste des tags associés à un logement.
function Tags({ tag }) {
  return (
    <ul className="tags">
      {tag.map((tagName) => (
        <li className="tags__text" key={tagName}>
          {tagName}
        </li>
      ))}
    </ul>
  )
}

export default Tags
