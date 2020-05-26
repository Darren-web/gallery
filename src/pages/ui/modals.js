import React, { Component } from 'react';
import { Card,Button,Modal } from 'antd'
import './ui.less'

class Modals extends Component {
    state = {
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false
    }
    handleOpen=(type) => {
        this.setState({
            [type]:true
        })
    }
    handleConfirm = (type) => {
        Modal[type]({
            title:"确认？",
            content:"你确认吗？",
            onOk(){
                console.log("ok")
            },
            onCancel(){
                console.log('cancel')
            }
        })

    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpen("showModal1")}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("showModal2")}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("showModal3")}>顶部20px弹窗</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("showModal4")}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleConfirm("confirm")}>confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm("success")}>success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm("warning")}>warning</Button>
                </Card>
                <Modal 
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1:false
                        })
                    }}
                >
                    <p>open modal</p>
                </Modal>
                <Modal 
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={()=>{
                        this.setState({
                            showModal2:false
                        })
                    }}
                >
                    <p>自定义页脚</p>
                </Modal>
                <Modal 
                    title="React"
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={()=>{
                        this.setState({
                            showModal3:false
                        })
                    }}
                >
                    <p>顶部20px弹窗</p>
                </Modal>
                <Modal 
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={()=>{
                        this.setState({
                            showModal4:false
                        })
                    }}
                >
                    <p>水平垂直居中</p>
                </Modal>
            </div>
        );
    }
}

export default Modals;