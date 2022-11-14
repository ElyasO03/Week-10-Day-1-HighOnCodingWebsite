import { Component } from "react";
import "./styling/stories.css"


class StoryOne extends Component {
    render() {
        return (
            <>
            <div class= "stories">
            <h2 id="storytag">Hello Watch Kit</h2>
            <h4>Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit
            framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting
            started with the WatchKit framework and developing apps for the Apple Watch.</h4>
            <div class= "likescomments">
            <h3>12 Comments</h3> 
            <h3>124 Likes</h3>
            </div>
            </div>
            </>
        )
    }
}

export default StoryOne