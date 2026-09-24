// Bannière réutilisable dont l'image, le titre et le style sont reçus en props.
function Banner({ title, picture, className }) {
  return (
    <div className={className}>
      <img className="banner__img" src={picture} alt="" />

      {/* Le titre est affiché uniquement lorsqu'une valeur est fournie. */}
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  )
}

export default Banner
