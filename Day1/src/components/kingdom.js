import React from "react";
import Peacock from "./Birds/Peacock";
import Swan from "./Birds/Swan";
import Crow from "./Birds/Crow";
import Eagle  from "./Birds/Eagle";
import Flamingo from "./Birds/Flamingo";
import Duck from "./Birds/Duck";

class Kingdom extends React.Component{
render(){
  return(
    <>
    <Peacock/>
    <Swan/>
    <Crow/>
    <Eagle/>
    <Flamingo/>
    <Duck/>
    </>
   )

}
}

export default Kingdom;
