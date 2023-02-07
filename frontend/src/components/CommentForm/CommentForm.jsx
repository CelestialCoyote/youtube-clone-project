import axios from "axios";
import useForm from "../../useForm";


const CommentForm = (props) => {

    const { formValues, handleChange, handleSubmit } = useForm(postNewComment);

    async function postNewComment() {
        try {
            let newComment = {...formValues, videoID: props.currentVideoID};

            await axios
                .post(`http://localhost:3007/api/comments/videoID/${props.currentVideoID}`, newComment)
                .then(res => props.setComments(res.data));
        } catch (error) {
            console.log(error);
        }
        
    }


    return (

        <form onSubmit={(e) => handleSubmit(e)}>
            <div id="commentForm">
                <label id="commentText">Add Comment
                    <input
                        id="commentText"
                        aria-labelledby="commentText"
                        name="text"
                        placeholder="Comment Text"
                        value={formValues.text}
                        onChange={(e) => handleChange(e)} />
                </label>
                <label id="Comment">
                    <input
                        aria-labelledby="Comment"
                        type="Submit" />
                </label>
            </div>
        </form>
    );
};


export default CommentForm;
