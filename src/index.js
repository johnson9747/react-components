import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App=()=>{
    return (
        <div className="ui container comments">
        <ApprovalCard>
           <CommentDetail author="Johnson" avatar={faker.image.avatar()} timeAgo="Today at 2AM"  content="Nice post !"/> 
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail author="Thomas" avatar={faker.image.avatar()} timeAgo="Today at 5AM" content="You are a genious !"/>
        </ApprovalCard>
        <ApprovalCard> 
           <CommentDetail author="Binny" avatar={faker.image.avatar()} timeAgo="Today at 6AM" content="Nicely written !"/> 
           </ApprovalCard>
           <ApprovalCard>
           <CommentDetail author="Mathew"avatar={faker.image.avatar()} timeAgo="Today at 1AM" content="Great efforts !"/> 
           </ApprovalCard>
        </div>

    );
};
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)