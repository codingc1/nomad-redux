import React from "react";
import { connect } from "react-redux";
// import { useParams } from "react-router-dom";

function Detail({toDo}){
    // const id = useParams();
    console.log(toDo);
    
    return (
        <>
        <h1>{toDo?.text}</h1>
        <h5>Created at:{toDo?.id}</h5>
        </>
    )
}

function mapStateToProps(state, ownProps){
    //match.parma.id
    const {match: {params:{id}}} = ownProps
    return {toDo:state.find(todo => todo.id === parseInt(id))}
}

// export default Detail;
export default connect(mapStateToProps)(Detail);