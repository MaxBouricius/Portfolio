import "./Popup.css";

function Popup(props) {
  const {popup, setter} = props;
  return (
    <div className="popupContainter" >
        <div className="popupWindow">
            <span className="popupClose" onClick={() =>setter(false) }>
                x
            </span>
            <h2>{popup.ImageText}</h2>

            <h2></h2>
        </div>
    </div>
  )
}

export default Popup