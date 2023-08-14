import "./Card.css";

function Card(props) {
  return (
    <div className="card" key={props.key}>
        <div className="card_img">
          <img  src={props.photo} width={100}></img>
        </div>
        
        <article className="detail">
          <div className="line1">
          {props.superHost && <div className="superHost">SUPER HOST</div>}
          <p className="type">{props.type}. {(props.beds>0) && <>{props.beds} beds</>}</p>
          </div>          
          <p className="rating"><span class="material-symbols-outlined star">star</span><span className="black">{props.rating}</span></p>
          
        </article>
        
        <h3 className="title">{props.title}</h3>      

    </div>
  )
}

export default Card

