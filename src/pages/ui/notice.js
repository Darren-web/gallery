import React, { Component } from 'react';
import { Card,Button, notification } from 'antd'
import './ui.less'

class Notice extends Component {
    openNotification = (type,description) => {
        if (description){
            notification.config({
                placement:description
            })
        }
        notification[type]({
            message:"发工资 了",
            description:"实发22K请笑纳"
        })
    }
    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success")}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info")}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning")}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error")}>Error</Button>
                </Card>
                <Card title="通知提醒框-自定义位置" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success","topLeft")}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info","topRight")}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning","bottomLeft")}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error","bottomRight")}>Error</Button>
                </Card>
            </div>
        );
    }
}

export default Notice;