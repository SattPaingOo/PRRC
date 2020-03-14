import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Button , Alignment, Menu, MenuItem, Popover, Position, Colors , Icon } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

function Header(){

    const { t, i18n } = useTranslation();

    const languageMenu = (
        <Menu>
            <MenuItem text="English" onClick={()=>i18n.changeLanguage('en')}/>
            <MenuItem text={t('Header.Myanmar')} onClick={()=>i18n.changeLanguage('mm')}/>
        </Menu>
    )

    return(
        <div>
            <Navbar style={{backgroundColor:'#9E2B0E',color:'white'}}>
                <Navbar.Group>
                    <Icon icon="small-plus" iconSize={40} />
                    <h2>PRRC</h2>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <Button className="bp3-minimal" text={t('Header.Home')} style={{color:Colors.WHITE}} />
                </Link>
                <Link to={'/news'} style={{ textDecoration: 'none' }}>
                    <Button className="bp3-minimal" text={t('Header.News')} style={{color:Colors.WHITE}} />
                </Link>
                <Link to={'/events'} style={{ textDecoration: 'none' }}>
                    <Button className="bp3-minimal" text={t('Header.Event')} style={{color:Colors.WHITE}}/>
                </Link>
                <Button className="bp3-minimal" text={t('Header.About')} style={{color:Colors.WHITE}}></Button>
                <Button className="bp3-minimal" text={t('Header.ContactUs')} style={{color:Colors.WHITE}}></Button>
                <Popover content={languageMenu} position={Position.BOTTOM}>
                    <Button className="bp3-minimal" text={t('Header.Language')} style={{color:Colors.WHITE}}></Button>
                </Popover>
                <Navbar.Divider/>
                {/* <Button className="bp3-minimal">
                    <Icon icon="notifications" color="white"></Icon>
                </Button>
                <Button className="bp3-minimal">
                    <Icon icon="user" color="white"></Icon>
                </Button>
                <Button className="bp3-minimal">
                    <Icon icon="cog" color="white"></Icon>
                </Button> */}
                <Button className="bp3-minimal" text="Login" intent="success" style={{color:Colors.WHITE,borderColor:Colors.WHITE}} outlined="true"></Button> 
                </Navbar.Group>
            </Navbar>
        </div>
    )
}

export default Header;