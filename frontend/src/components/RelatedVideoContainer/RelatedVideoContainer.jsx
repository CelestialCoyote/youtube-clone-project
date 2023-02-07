import RelatedVideo from "../RelatedVideo/RelatedVideo";
import './RelatedVideoContainer.css';


const RelatedVideoContainer = (props) => {

    return (

        <div id="relatedVideoContainer">
            <ul>
                {props.ytResults.map(vid =>
                    <li key={vid.id.videoId}>
                        <RelatedVideo
                            setCurrentVideoID={props.setCurrentVideoID}
                            setCurrentVideoInfo={props.setCurrentVideoInfo}
                            vid={vid}
                        />
                    </li>)}
            </ul>
        </div>

    );
};


export default RelatedVideoContainer;
