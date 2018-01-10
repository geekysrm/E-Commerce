import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './../../styles/NavBar.css';
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;



const NavBar = () => (


            <Menu

                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '70px',width: '100%' }}
            >
                <Menu.Item key="0" style={{ cursor: 'pointer' }}></Menu.Item>
                <Menu.Item key="1" disabled={true} style={{ cursor: 'pointer' }}>
                    {<span ><a id="title" href="/">Watchable</a></span>}
                </Menu.Item>
                <div >
            <img className="logo" src="./assets/watch-logo.png" />
                </div>


            <SubMenu title={<span><Icon type="man" />{<span className="category">Men</span>}</span>}>
                <SubMenu style={{ width: '400px' }} key="sub2" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Luxury Watches</span></span>}>
                    <Menu.Item key="5">Audemars Piguet</Menu.Item>
                    <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                    <Menu.Item key="7">Patek Philippe</Menu.Item>
                    <Menu.Item key="9">Rolex</Menu.Item>
                    <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                    <Menu.Item key="11">Blancpain</Menu.Item>
                </SubMenu>
                <SubMenu style={{ width: '400px' }} key="sub3" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Digital Watches</span></span>}>
                    <Menu.Item key="5">Audemars Piguet</Menu.Item>
                    <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                    <Menu.Item key="7">Patek Philippe</Menu.Item>
                    <Menu.Item key="9">Rolex</Menu.Item>
                    <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                    <Menu.Item key="11">Blancpain</Menu.Item>
                </SubMenu>
                <SubMenu style={{ width: '400px' }} key="sub4" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Smart Watches</span></span>}>
                    <Menu.Item key="5">Audemars Piguet</Menu.Item>
                    <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                    <Menu.Item key="7">Patek Philippe</Menu.Item>
                    <Menu.Item key="9">Rolex</Menu.Item>
                    <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                    <Menu.Item key="11">Blancpain</Menu.Item>
                </SubMenu>
                <SubMenu style={{ width: '400px' }} key="sub5" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Fashion Watches</span></span>}>
                    <Menu.Item key="5">Audemars Piguet</Menu.Item>
                    <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                    <Menu.Item key="7">Patek Philippe</Menu.Item>
                    <Menu.Item key="9">Rolex</Menu.Item>
                    <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                    <Menu.Item key="11">Blancpain</Menu.Item>
                </SubMenu>
            </SubMenu>


        <SubMenu title={<span><Icon type="woman" />{<span className="category">Women</span>}</span>}>
            <SubMenu style={{ width: '400px' }} key="sub2" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Luxury Watches</span></span>}>
                <Menu.Item key="5">Audemars Piguet</Menu.Item>
                <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                <Menu.Item key="7">Patek Philippe</Menu.Item>
                <Menu.Item key="9">Rolex</Menu.Item>
                <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                <Menu.Item key="11">Blancpain</Menu.Item>
            </SubMenu>
            <SubMenu style={{ width: '400px' }} key="sub3" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Digital Watches</span></span>}>
                <Menu.Item key="5">Audemars Piguet</Menu.Item>
                <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                <Menu.Item key="7">Patek Philippe</Menu.Item>
                <Menu.Item key="9">Rolex</Menu.Item>
                <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                <Menu.Item key="11">Blancpain</Menu.Item>
            </SubMenu>
            <SubMenu style={{ width: '400px' }} key="sub4" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Smart Watches</span></span>}>
                <Menu.Item key="5">Audemars Piguet</Menu.Item>
                <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                <Menu.Item key="7">Patek Philippe</Menu.Item>
                <Menu.Item key="9">Rolex</Menu.Item>
                <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                <Menu.Item key="11">Blancpain</Menu.Item>
            </SubMenu>
            <SubMenu style={{ width: '400px' }} key="sub5" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Fashion Watches</span></span>}>
                <Menu.Item key="5">Audemars Piguet</Menu.Item>
                <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                <Menu.Item key="7">Patek Philippe</Menu.Item>
                <Menu.Item key="9">Rolex</Menu.Item>
                <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                <Menu.Item key="11">Blancpain</Menu.Item>
            </SubMenu>
        </SubMenu>

        <SubMenu title={<span><Icon type="smile" />{<span className="category">Kids</span>}</span>}>
            <SubMenu style={{ width: '400px' }} key="sub2" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Luxury Watches</span></span>}>
                <Menu.Item key="5">Audemars Piguet</Menu.Item>
                <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                <Menu.Item key="7">Patek Philippe</Menu.Item>
                <Menu.Item key="9">Rolex</Menu.Item>
                <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                <Menu.Item key="11">Blancpain</Menu.Item>
            </SubMenu>
            <SubMenu style={{ width: '400px' }} key="sub3" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Digital Watches</span></span>}>
                <Menu.Item key="5">Audemars Piguet</Menu.Item>
                <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                <Menu.Item key="7">Patek Philippe</Menu.Item>
                <Menu.Item key="9">Rolex</Menu.Item>
                <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                <Menu.Item key="11">Blancpain</Menu.Item>
            </SubMenu>
            <SubMenu style={{ width: '400px' }} key="sub4" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Smart Watches</span></span>}>
                <Menu.Item key="5">Audemars Piguet</Menu.Item>
                <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                <Menu.Item key="7">Patek Philippe</Menu.Item>
                <Menu.Item key="9">Rolex</Menu.Item>
                <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                <Menu.Item key="11">Blancpain</Menu.Item>
            </SubMenu>
            <SubMenu style={{ width: '400px' }} key="sub5" title={<span ><Icon type="clock-circle" /><span style={{ width: '250px' }}>Fashion Watches</span></span>}>
                <Menu.Item key="5">Audemars Piguet</Menu.Item>
                <Menu.Item key="6">Vacheron Constantin</Menu.Item>
                <Menu.Item key="7">Patek Philippe</Menu.Item>
                <Menu.Item key="9">Rolex</Menu.Item>
                <Menu.Item key="10">IWC Schaffhausen</Menu.Item>
                <Menu.Item key="11">Blancpain</Menu.Item>
            </SubMenu>
        </SubMenu>

        <Menu.Item key="1" disabled={true} style={{ cursor: 'default' }}>

        </Menu.Item>

        <Search
            placeholder="Search for watches"
            style={{ width: '500px', marginLeft:10,marginRight:50}}
            onSearch={value => console.log(value)}
            enterButton
        />

        <Button type="secondary" shape="circle" icon="user-add" size='large' />
        <Button type="secondary" shape="circle" icon="phone" size='large' style={{marginLeft:10}} />

            </Menu>




);

export default NavBar;
