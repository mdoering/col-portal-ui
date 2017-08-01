import React from 'react';
import PropTypes from 'prop-types';
import DiscussionList from './DiscussionList';
import axios from 'axios';

class Discussion extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {discussion: props.discussion}; // set state
        // path to resource to comment about
        this.about = props.about;
    }

    static addComment(text) {
        var c = {text: text, when: new Date(), user: "markus"};
        // TODO: write to API
        axios.post(this.about + '/comment', c)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        return c;
    }

    handleSubmit(event) {
        event.preventDefault();
        var comment = Discussion.addComment(this.text.value);
        this.text.value = '';
        this.state.discussion.push(comment);
        this.setState({discussion: this.state.discussion});
    }

  render() {
      return (
          <div id="discussion">
              <form onSubmit={this.handleSubmit}>
                  <dl className="dl-horizontal">
                      <dt>Discussion</dt>
                      <DiscussionList discussion={this.state.discussion} />
                      <dd>
                        <textarea ref={node => {this.text = node;}}
                                  name="comment"
                                  className="form-control"
                                  cols="5"
                                  placeholder="Leave a comment ..."
                        />
                          <button type="submit">Comment</button>
                      </dd>
                  </dl>
              </form>
          </div>
      )
  }
}


export default Discussion;
