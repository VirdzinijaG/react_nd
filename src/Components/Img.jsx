function Img(props) {
    return (
        <div className="img">
            <img src={props.img} />
            <span>{props.desc}</span>
        </div>
    );
}
export default Img;