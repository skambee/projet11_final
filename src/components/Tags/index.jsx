/**
 * COMPOSANT TAGS
 * --------------
 * La prop tag contient un tableau, par exemple :
 * ["Cosy", "Île-de-France"]
 *
 * Le composant transforme chaque valeur du tableau en élément <li>.
 *
 */
function Tags({ tag }) {
  return (
    <ul className="tags">
      {/*
        map() parcourt le tableau tag.
        tagName représente la valeur actuellement parcourue.
        Cette valeur sert également de key car les tags d'un logement sont uniques.
      */}
      {tag.map((tagName) => (
        <li className="tags__text" key={tagName}>
          {tagName}
        </li>
      ))}
    </ul>
  )
}

export default Tags
