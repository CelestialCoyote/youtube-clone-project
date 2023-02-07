import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import RelatedVideoContainer from './components/RelatedVideoContainer/RelatedVideoContainer';
import defaultVideo from './data/defaultVideoInfo';
import defaultRelatedVideos from './data/defaultVideoRelatedVideos';
import CommentsContainer from './components/CommentsContainer/CommentsContainer';


const App = () => {
    const [ytResults, setYtResults] = useState(defaultRelatedVideos.items);
    const [currentVideoInfo, setCurrentVideoInfo] = useState(defaultVideo);
    const [currentVideoID, setCurrentVideoID] = useState(currentVideoInfo.items[0].id);
    const [comments, setComments] = useState([]);

    async function handleGetComments() {
        try {
            await axios
                .get(`http://localhost:3007/api/comments/videoID/${currentVideoID}`)
                .then(res => { setComments(res.data) });

            console.log(comments);

        } catch (error) {
            console.log(error.message);
        }
    };

    //const handleSetCurrentVideo = () => {
    //    setCurrentVideoInfo(ytResults.shift());
    //};

    //useEffect(() => { handleSetCurrentVideo() }, [ytResults]);
    useEffect(() => { handleGetComments() }, [currentVideoID]);

    return (

        <div className="App">
            <TitleBar
                //setCurrentVideoInfo={setCurrentVideoInfo}
                setYtResults={setYtResults}
            />

            <div className="flex-row">
                <div id="mainPlayerCommentsContainer">
                    <VideoPlayer
                        currentVideoInfo={currentVideoInfo}
                        currentVideoID={currentVideoID}
                    />
                    <CommentsContainer
                        setComments={setComments}
                        currentVideoID={currentVideoID}
                        comments={comments}
                    />
                </div>
                <RelatedVideoContainer
                    setCurrentVideoID={setCurrentVideoID}
                    setCurrentVideoInfo={setCurrentVideoInfo}
                    ytResults={ytResults}
                />
            </div>

        </div>
    );
};


export default App;
