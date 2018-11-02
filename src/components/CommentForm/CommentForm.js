import React, { Component } from 'react';
import WOW from "wowjs";

class CommentForm extends Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div id="comment-frm-container">
                <div className="vid-heading overflow-hidden">
                    <span className="wow fadeInUp" data-wow-duration="0.8s">Leave a comment</span>
                    <div className="hding-bottm-line wow zoomIn" data-wow-duration="0.8s"></div>
                </div>
                <form className="comment-form">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="text" name="comment-user-name" className="form-control" id="cmnt-user-name" placeholder="NAME" required />
                                <div className="input-top-line"></div>
                                <div className="input-bottom-line"></div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="email" name="comment-user-email" className="form-control" id="cmnt-user-email" placeholder="EMAIL" required />
                                <div className="input-top-line"></div>
                                <div className="input-bottom-line"></div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <textarea name="comment-user-message" id="cmnt-user-msg" rows="4" className="form-control" placeholder="MESSAGE" required></textarea>
                                <div className="input-top-line"></div>
                                <div className="input-bottom-line"></div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-snd">
                                Post Comment
							</button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}
export default CommentForm;