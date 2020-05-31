import React from "react"
import { connect } from "react-redux";
import { actionCreators } from "../routes/store";
import {Link } from "react-router-dom";

function ToDo({text, onBtnClick, id}){
    // function del(e){
    //     onBtnClick()
    // }
    return (
        <li>
            <Link to={`/${id}`}>
        {text}<button onClick={onBtnClick}>DEL</button>
        </Link>
        </li>
    );
}



function mapDispatchToProps(dispatch, ownProps){
    // console.log(dispatch);
    return {
        onBtnClick: ()=>dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}
//connect는 Home으로 보내는 props에 추가되도록 함
export default connect(null, mapDispatchToProps)(ToDo);
//state를 가져옴 마무리