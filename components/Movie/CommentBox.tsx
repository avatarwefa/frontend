import React from 'react'

const badword = [
    'dm',
    'vcl',
    'vl',
    'sex',
    'lon',
    'du'
]

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.state = {
            curTime: date,
        }
    }
    postComment = async event => {
        let isGood = true;
        event.preventDefault()
        for (let index = 0; index < badword.length; index++) {
            if (event.target.Body.value.match(badword[index]))
                isGood = false;
        }
        if (isGood == false)
            window.alert("Bình luận chứa từ ngữ cấm")
        else {
            const res = await fetch('http://movies202-env.eba-jyaxusy4.us-east-2.elasticbeanstalk.com/api/comment/addComment', {
                body: JSON.stringify({
                    IdMovie: 3,
                    IdUser: 3,
                    IdParentUser: -1,
                    UserName: 'Test',
                    Body: event.target.Body.value,
                    dateCreate: this.state.curTime
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            const result = await res.json()
            window.alert("Bình luận thành công")
        }
    }
    render() {
        return (
            <div className="mv-user-comment-box">
                <p>Write Your Comment Here:</p>
                <form onSubmit={this.postComment}>
                    <textarea name="Body" id="Body" autoComplete="Body" required></textarea>
                    <button type="submit"> SUBMIT </button>
                </form>
            </div>
        )
    }
}

export default CommentBox