import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = props => {
    console.log('DemoOutput Running!');
    return (
        <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
    )
};

export default React.memo(DemoOutput);
// React.memo() allows us to optimize functional components
/* 
    memo tells the react that for the component which is gets as an argument, 
    react shoul look for the props this component gets and check the new value 
    for all those props and compair it to the previous value that props got and 
    only if the value of the props change the component should be re-executed and re-evaluated.
*/
/* 
    React. memo() is a great tool to memoize functional components. 
    When applied correctly, it prevents useless re-renderings when the next props equal to previous ones. 
    Take precautions when memoizing components that use props as callbacks.
*/