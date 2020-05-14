import React, { Component } from 'react';
import MenuConfig from './../../config/menuConfig';
import './index.less'
import { Menu, } from 'antd';
const SubMenu = Menu.SubMenu;
class NavLeft extends Component {
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }
    //渲染菜单
    renderMenu = (data) => {
        return (
            data.map((item) => {
                if(item.children){
                    return (
                        <SubMenu title={item.title} key={item.key}>
                            {this.renderMenu(item.children)}
                        </SubMenu>
                    )
                }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
            })
        )
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img alt='' src="/assets/logo-ant.svg"/>
                    <h1>Hello BIKE</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLeft;