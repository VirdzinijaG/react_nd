function Img(props) {
    return (
        <div className="img">
            <img src={props.img} alt={props.desc} />
        </div>
    );
}
export default Img;