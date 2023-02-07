import axios from "axios";
import { API_KEY01 } from '../../API_KEYS';


const RelatedVideo = (props) => {

    const imageClick = () => {
        console.log(`Click.  Video ID = ${props.vid.id.videoId}`);
        props.setCurrentVideoID(props.vid.id.videoId);
        handleGetVideoInfo(props.vid.id.videoId);
    }

    async function handleGetVideoInfo(videoID) {
        try {
            await axios
                .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoID}&key=${API_KEY01}`)
                .then(res => { props.setCurrentVideoInfo(res.data) });
            console.log(props.currentVideoInfo);

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="flex-row">

            <img
                src={props.vid.snippet.thumbnails.default.url} alt='thumbnail'
                width={240}
                height={180}
                onClick={() => imageClick()}
            />

            <div className="widthFifty">
                <p className="relatedVideoTitleText">{props.vid.snippet.title}</p>
                <p>{props.vid.snippet.channelTitle}</p>

                <div className="flex-row">
                    <p>Views</p>
                    <p>{props.vid.snippet.publishTime}</p>
                </div>
            </div>

        </div>

    );
};


export default RelatedVideo;
