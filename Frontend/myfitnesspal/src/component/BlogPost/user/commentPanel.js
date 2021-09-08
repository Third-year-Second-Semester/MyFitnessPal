import { Component } from "react";
import React from 'react';
import './comment.css';

class CommentPanel extends Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                Helloooooo
            <div className="container">
              <div className="row bootstrap snippets bootdeys">
                <div className="col-md-8 col-sm-12">
                  <div className="comment-wrapper">
                    <div className="panel panel-info">
                      <div className="panel-heading">Comment panel</div>

                      <div className="panel-body">
                        <textarea
                          className="form-control"
                          placeholder="write a comment..."
                          rows="3"
                        ></textarea>
                        <br />
                        <button type="button" className="btn btn-info pull-right">
                          Post
                        </button>
                        <div className="clearfix"></div>
                        <hr></hr>
                        <ul className="media-list">
                          <li className="media">
                           
                            <div className="media-body">
                              <span className="text-muted pull-right">
                                <small className="text-muted">30 min ago</small>
                              </span>
                              <strong className="text-success">@MartinoMont</strong>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,{" "}
                                <a href="#">#consecteturadipiscing </a>.
                              </p>
                            </div>
                          </li>
                          <li className="media">
                            
                            <div className="media-body">
                              <span className="text-muted pull-right">
                                <small className="text-muted">30 min ago</small>
                              </span>
                              <strong className="text-success">
                                @LaurenceCorreil
                              </strong>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor{" "}
                                <a href="#">#ipsumdolor </a>adipiscing elit.
                              </p>
                            </div>
                          </li>
                          <li className="media">
                           
                            <div className="media-body">
                              <span className="text-muted pull-right">
                                <small className="text-muted">30 min ago</small>
                              </span>
                              <strong className="text-success">@JohnNida</strong>
                              <p>
                                Lorem ipsum dolor <a href="#">#sitamet</a> sit
                                amet, consectetur adipiscing elit.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default CommentPanel;