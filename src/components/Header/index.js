import React, { Component } from 'react';
import { Col, Row } from 'antd';
import './index.less'
import Util from './../../util/util'
import { connect } from 'react-redux'


class Header extends Component {
    componentWillMount(){
        this.setState({
            userName:'Darren'
        });
        //首页时间
        setInterval(() => {
            let sysTime = Util.formateDate(+new Date())
            this.setState({
                sysTime
            });
        },1000);
    }
    render() {
        const { menuName, menuType } = this.props;
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={menuType?18:24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href=" ">退出</a>
                    </Col>
                </Row>
                {
                    menuType?'':
                        <Row className="breadcrumb">
                            <Col span={4}className="breadcrumb-title">
                                {menuName || '首页'}
                            </Col>
                            <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                            </Col>
                        </Row>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        menuName: state.menuName
    }
};
export default connect(mapStateToProps)(Header)