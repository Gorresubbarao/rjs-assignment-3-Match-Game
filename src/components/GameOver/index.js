import {Component} from 'react'
import './index.css'

import Header from '../Header'
import TabsList from '../TabsList'
import ImagesItem from '../ImagesItem'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

class GameOver extends Component {
  state = {
    matchedImage: '',
    activeTabId: tabsList[0].tabId,
  }

  onClickUpdatedTab = id => {
    this.setState({
      activeTabId: id,
    })
  }

  tabsListView = () => {
    const {activeTabId} = this.state
    return (
      <ul className="tabs-list">
        {tabsList.map(eachTab => (
          <TabsList
            key={eachTab.tabId}
            tabDetails={eachTab}
            onClickUpdatedTab={this.onClickUpdatedTab}
            isActive={activeTabId === eachTab.tabId}
          />
        ))}
      </ul>
    )
  }

  onClickImgeItem = imgUrl => {
    this.setState({
      matchedImage: imgUrl,
    })
  }

  getFilteredImagelist = () => {
    const {imagesList} = this.props
    const {activeTabId} = this.state

    const filteredList = imagesList.filter(
      eachImg => eachImg.category === activeTabId,
    )

    return filteredList
  }

  imageListView = () => {
    const filteredList = this.getFilteredImagelist()
    return (
      <ul className="img-list">
        {filteredList.map(eachImg => (
          <ImagesItem
            key={eachImg.id}
            imgDeatails={eachImg}
            onClickImgeItem={this.onClickImgeItem}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {imagesList} = this.props
    const displayUrlObject = imagesList[0]
    const firstObjDisplayImgUrl = displayUrlObject.imageUrl
    const {matchedImage} = this.state
    const displayImgUrl = matchedImage ? matchedImage : firstObjDisplayImgUrl

    return (
      <div className="app-container">
        <div className="response-container">
          <Header />
          <div className="display-img-container">
            <img src={displayImgUrl} alt="match" className="display-img" />
          </div>
          {this.tabsListView()}
          {this.imageListView()}
        </div>
      </div>
    )
  }
}

export default GameOver
