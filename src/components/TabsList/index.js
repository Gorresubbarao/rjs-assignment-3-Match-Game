import './index.css'

const TabsList = props => {
  const {tabDetails, onClickUpdatedTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    onClickUpdatedTab(tabId)
  }

  const activeButtonClassName = isActive
    ? 'tab-button active-button'
    : 'tab-button'

  return (
    <li className="tab-item">
      <button
        className={activeButtonClassName}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
