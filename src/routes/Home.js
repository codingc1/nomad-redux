import React, {useState} from "react"
import { connect } from "react-redux";
import { actionCreators } from "./store";
//addTodo 디스패치를 직접가져오지 않고 아래 mapDispathchToProps에
//서 함수로 실행하도록 변형함!!!!
import ToDo from "../components/ToDo";

function Home({toDos, addToDo}){
    // console.log(props)
    const [text, setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        // console.log(text)
        addToDo(text)
        setText("");
    }
    return(
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {/* {JSON.stringify(toDos)}  */}
                {/* toDos는 mapStateToProps에서 가져온것 */}
                {toDos.map(todo =>(
                    <ToDo key={todo.id} {...todo}></ToDo>
                ))}
            </ul>
        </>
    )
}
//state를 가져옴 (state, PROPS)
// function getCurentState(state, ownProps){
//     return state;
// }

//mapStateToProps란 Redux state로부터 Home컴포넌트에 prop로 전달
function mapStateToProps(state){
    // console.log(state);
    return {toDos:state};
}
//인자를 dispatch, ownProps가질수 있으나 여기서는 필요없어서 지움
function mapDispatchToProps(dispatch){
    // console.log(dispatch);
    return {
        addToDo: (text)=>dispatch(actionCreators.addToDo(text))
    }
}
//connect는 Home으로 보내는 props에 추가되도록 함
export default connect(mapStateToProps, mapDispatchToProps)(Home);
//state를 가져옴 마무리