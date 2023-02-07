const Comment = (props) => {

    return (

        <div className="comment flex-row">
            <p>{props.comment.text}</p>
            <p>Date posted: {props.comment.date}</p>
        </div>

    );
};
 

export default Comment;
