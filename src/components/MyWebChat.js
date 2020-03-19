import { DirectLine } from "botframework-directlinejs"
import React from "react"
import ReactWebChat from "botframework-webchat"

class MyWebChat extends React.Component {
  constructor(props) {
    super(props)


    this.directLine = new DirectLine({ token: "<your token goes here>" })
    this.directLine.postActivity({
        from: { id: 'myUserId', name: 'myUserName' },
        type: 'conversationUpdate',
        name: 'webchat/join',
        // value: { locale: 'en-US' }
      }).subscribe(
          id => console.log("Posted welcome event, assigned ID ", id),
          error => console.log("Error posting activity", error)
      );
  }

  render() {
    return (
      <ReactWebChat 
        directLine={ this.directLine } 
        userID="myUserId" 
        
      />

    )
  }
}

export default MyWebChat