import React,{ Component } from 'react'

class CommentInput extends Component{
    constructor(){
        super();
        this.state={
            userName:'',
            content:''
        }
    }
    componentWillMount(){
        const userName = localStorage.userName
        if (userName) {
            this.setState({ userName })
        }
    }
    componentDidMount(){
        console.log(this.textarea)
        this.textarea.focus();
    }
    handleSubmit(){
        let aComment = this.state;
        aComment['time'] = +new Date()
        localStorage.setItem('userName', this.state.userName)
        this.setState({
            content:''
        })
        this.props.onSubmit(aComment)
    }
    handleUsernameChange(e){
        this.setState({
            userName:e.target.value
        })
    }
    handleContentChange(e){
        this.setState({
            content:e.target.value
        })
    }
    render(){
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.userName} onChange={ this.handleUsernameChange.bind(this) } />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea)=>this.textarea = textarea} value={this.state.content} onChange={ this.handleContentChange.bind(this) } />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}
export default CommentInput