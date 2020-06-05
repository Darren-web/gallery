import React, { Component } from 'react'
import { Card, Form,Button,message } from 'antd'
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';
// import axios from 'axios'


let FormItem = Form.Item
class LeaveMsg extends Component {
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue()
        console.log('userInfo', userInfo)
        this.props.form.validateFields((err,value)=>{
            if(!err) {
                message.success(`留言 ${userInfo.leavemsg} 成功`)
            }
        })
    }
    state = {
        likes: 0,
        dislikes: 0,
        action: null,
    };

    like = () => {
    this.setState({
        likes: 1,
        dislikes: 0,
        action: 'liked',
    });
    };

    dislike = () => {
    this.setState({
        likes: 0,
        dislikes: 1,
        action: 'disliked',
    });
    };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        const { likes, dislikes, action } = this.state;

    const actions = [
        <span key="comment-basic-like">
            <Tooltip title="Like">
            <Icon
                type="like"
                theme={action === 'liked' ? 'filled' : 'outlined'}
                onClick={this.like}
            />
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
        </span>,
        <span key=' key="comment-basic-dislike"'>
            <Tooltip title="Dislike">
            <Icon
                type="dislike"
                theme={action === 'disliked' ? 'filled' : 'outlined'}
                onClick={this.dislike}
            />
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
        </span>,
        <span key="comment-basic-reply-to">Reply to</span>,
        ];
        return (
            <div>
                <Card 
                    title="给我留言"
                >
                    <Form style={{width:500,margin:'0 auto'}}>
                        <FormItem>
                        {
                                getFieldDecorator("leavemsg",{
                                    initialValue:''
                                })(
                                    <TextArea
                                        autosize={
                                            {minRows:6,maxRows:10}
                                        }
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit} style={{float:"right"}} >发布留言</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="留言板" style={{marginTop:20}}>
                <Comment
                    style={{marginTop:20}}
                    actions={actions}
                    author={<a>Han Solo</a>}
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <p>
                            网站真好看，谢谢分享
                        </p>
                    }
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
                />
                </Card>
            </div>
        )
    }
}
export default Form.create()(LeaveMsg);