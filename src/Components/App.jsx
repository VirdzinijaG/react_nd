import trains from "./data";
import Img from "./Img";

function App() {
    return (<>
        {trains.map((t, i) => <Img key={i} img={t.img} desc={t.desc} />)}
    </>);
    }

    export default App;