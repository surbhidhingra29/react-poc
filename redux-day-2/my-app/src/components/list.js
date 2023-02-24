import { connect } from "react-redux";
import React from "react";

const ConnectedList = (props)=>{
    return(
        <>
            <h5 className="mt-2" style={{color:"dodgerblue"}}>List of Users</h5>
            <ul>
                {props.articles.map((item, i)=>(
                    <li key={i}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}


const mapStateTProps = state=> {

    return {articles: state.addUserandArticleReducer.articles}
}

const List = connect(mapStateTProps, null)(ConnectedList);

export default List;
