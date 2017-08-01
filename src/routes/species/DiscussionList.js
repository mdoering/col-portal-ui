import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DiscussionList = ({discussion}) => {
    return (
        <div> {discussion.map((d) => {
                console.log(d);
                return <DiscussionItem {...d}/>
            })
        }
        </div>

    )
}

DiscussionList.propTypes = {
    discussion: PropTypes.array.isRequired
};


const DiscussionItem = ({text, when, user}) => {
    return (
        <dd>
            <blockquote className="comment">
                <p>{text}</p>
                <footer className="blockquote-footer">{when.toISOString()} by <Link to="">{user}</Link></footer>
            </blockquote>
        </dd>
    )
}

DiscussionItem.propTypes = {
    text: PropTypes.string,
    when: PropTypes.object,
    user: PropTypes.string,
};

export default DiscussionList;
