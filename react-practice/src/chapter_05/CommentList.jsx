import React from "react";
import Comment from "./Comment";

const comments = [
{
    name: "전수민",
    comment: "끝까지 가면 내가 다 이겨"
},
{
    name: "이민혁",
    comment: "보고 싶다 친구들아"
},
{
    name: "차차",
    comment: "다 함께, 차차차"

}
];

const CommentList = (props) => {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    )
}

export default CommentList;