import SearchBar from "../SearchBar/SearchBar";
import './TitleBar.css'


const TitleBar = ({setCurrentVideoInfo, setYtResults}) => {

    return (

        <div id='title-bar'>
            <label id='title-bar-label'>YouTubeClone</label>
            <SearchBar
                //setCurrentVideoInfo={setCurrentVideoInfo}
                setYtResults={setYtResults}
            />
        </div>

    );
}
 

export default TitleBar;
