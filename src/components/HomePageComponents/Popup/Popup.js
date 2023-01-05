import "./Popup.css";

function Popup(props) {
  const {popup, setter} = props;

  return (
    <div className="popupContainter" >
        <article className="popupWindow">
            <i onClick={() =>setter(false) } class="fa-regular fa-circle-xmark popupClose"></i>
            <img className="popup__image" src={popup.Image} alt="cover" />
            
            
            <div className="popup__textSection">
              <h2>{popup.ImageText}</h2>
              <div className="popup__textSection2">
                <div>
                <p>{popup.popupText}</p>
                <a className="popup__textLink" href={popup.link}>Read more...</a>
                </div>
                <p className="popup__text2">{popup.popupText2}</p>
              </div>
              
            </div>

        </article>
    </div>
  )
}

export default Popup