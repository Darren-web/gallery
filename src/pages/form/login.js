import React, { Component } from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'
import axios from 'axios'
let FormItem = Form.Item
class FormLogin extends Component {
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue()
        console.log('userInfo', userInfo)
        this.props.form.validateFields((err,value)=>{
            if(!err) {
                message.success(`用户 ${userInfo.userName} 登录密码为${userInfo.userPwd}`)
            }
        })
        axios.get("./api/check",{
            params:{
                userName:userInfo.userName,
                userPwd:userInfo.userPwd
            }
        }).then((data)=>console.log("success",data))

        // axios.get("./json/data.json").then((data)=>{
        //     console.log('data', data)

        //     if(data.data.name==="tom"){
        //         console.log('data', data.data.status)
        //     }
        // })
        
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{}}>
                <Card title="请登录">
                    <Form style={{width:300,margin:"0 auto"}}>
                        <FormItem>
                            {
                                getFieldDecorator("userName",{
                                    initialValue:'123456',
                                    rules:[
                                        {
                                            required:true,
                                            message:"用户名不能为空"
                                        },{
                                            min:5,max:10,
                                            message:'长度在5-10之间'
                                        },{
                                            pattern:/^\w+$/,
                                            // pattern:new RegExp('^\\w+$','g'),
                                            message:"用户名必须为字母或数字"
                                        }
                                    ] 
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("userPwd",{
                                    initialValue:'123456',
                                    rules:[] 
                                })(
                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("remember",{
                                    valuePropName:"checked",
                                    initialValue:true,
                                    rules:[] 
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:"right"}}>忘记密码</a>
                        </FormItem>
                        
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit} style={{float:"right"}} >登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormLogin);