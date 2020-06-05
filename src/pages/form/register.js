import React from 'react'
import {Card,Form,Button,Input,Checkbox,message} from 'antd'
const FormItem = Form.Item;
class FormRegister extends React.Component{

    state={}

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        message.success(`${userInfo.userName} 恭喜你，注册成功`)
    }


    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return (
            <div>
                <Card title="请填写注册信息">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空'
                                        }
                                    ]
                                })(
                                    <Input type="password" placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="邮箱" {...formItemLayout}>
                            {
                                getFieldDecorator('mail', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '邮箱不能为空'
                                        }
                                    ]
                                })(
                                    <Input  placeholder="请输入邮箱" />
                                )
                            }
                        </FormItem>
                        <FormItem label="电话" {...formItemLayout}>
                            {
                                getFieldDecorator('phone', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '电话不能为空'
                                        }
                                    ]
                                })(
                                    <Input type="text" placeholder="请输入邮箱" />
                                )
                            }
                        </FormItem>
                        
                        
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('userImg',{
                                    valuePropName:"checked",
                                    initialValue:true,
                                })(
                                <Checkbox>我已阅读过<a href="javascript:">注册协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormRegister);