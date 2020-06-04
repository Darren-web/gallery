import React, { Component } from 'react'
import { Card, Form,Button,message } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
// import axios from 'axios'


let FormItem = Form.Item
class LeaveMsg extends Component {
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue()
        console.log('userInfo', userInfo)
        this.props.form.validateFields((err,value)=>{
            if(!err) {
                message.success(`用户 ${userInfo.userName} 登录密码为${userInfo.userPwd}`)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
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
            </div>
        )
    }
}
export default Form.create()(LeaveMsg);