import "./Popup.css";

function Popup(props) {
  const {popup, setter} = props;
  return (
    <div className="popupContainter" >
        <article className="popupWindow">
            <span className="popupClose" onClick={() =>setter(false) }>
                x
            </span>
            <img className="popup__image" src={popup.Image} alt="cover" />
            
            
            <div className="popup__textSection">
              <h2>{popup.ImageText}</h2>
              <div className="popup__textSection2">
                <p>{popup.popupText}</p>
                <a className="popup__textLink" href={popup.link}>lees meer...</a>
              </div>
              
            </div>

        </article>
    </div>
  )
}

export default Popup