import './index.css'

const ImagesItem = props => {
  const {onClickImgeItem, imgDeatails} = props
  const {thumbnailUrl, imageUrl} = imgDeatails

  const onClickThambnail = () => onClickImgeItem(imageUrl)

  return (
    <li className="li-item">
      <button className="img-button" type="button" onClick={onClickThambnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ImagesItem
