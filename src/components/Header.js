import React, { Component } from 'react'
import { Link } from 'gatsby'
import SelectLanguage from './SelectLanguage'
import window from 'global'


const headerScrollStyle = {
    padding: 20,
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '20px',
    alignItems: 'center',
    zIndex: 2000,
	boxShadow: '0 0 1px 0 grey'
}

const headerNotScrollStyle = {
    padding: 20,
    backgroundColor: 'transparent',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '20px',
    alignItems: 'center',
    zIndex: 2000,
	boxShadow: '0 0 0px 0'
}

const hambuderIconDiv = {
    display: 'block',
    float: 'right',
    marginTop: '10px',
    backgroundColor: 'white',
    padding: '2px 4px',
    borderRadius: '2px',
    cursor: 'pointer',
}

const hambugerIcon = {
    width: '21px',
    height: '2px',
    backgroundColor: 'grey',
    margin: '3px 0',
}

const navbarStyle = {
    marginTop: '-10px',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: 860,
}

const hide = {
    display: 'none',
}

const mobileMenuDiv = {
    marginTop: '8px',
    float: 'right',
    textAlign: 'center',
    boxShadow: 'grey 2px 2px 2px',
    borderRadius: '2px'
}

const mobileMenu = {
    display: 'block',
    width: '90px',
    backgroundColor: 'white',
    textDecoration: 'none',
    fontFamily: 'Adele',
    padding: '4px',
    color: 'black',
}

const rightNavbarStyle = {
    display: 'inline-block',
    float: 'right',
    marginTop: '10px',
}

const NavLinkListEN = [
	{
		'url': 'posts/about/',
		'text': 'About',
	},
	{
		'url': '',
		'text': 'Note',
	},
	//{
	//	'url': '',
	//	'text': 'Project',
	//},
]

const NavLinkListZH = [
	{
		'url': 'posts/about/',
		'text': '關於',
	},
	{
		'url': '',
		'text': '筆記',
	},
	//{
	//	'url': '',
	//	'text': 'Project',
	//},
]

class Header extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            onTop: true,
            isMoblie: false,
            isShow: false,
        }
        this.reSize.bind(this);
        this.changeMobildMenu.bind(this);
    }

    componentWillMount() {
        this.reSize();
    }

	componentDidMount() {
        window.addEventListener('resize', this.reSize);
		window.addEventListener('scroll', this.onScroll);
	}

	onScroll = () => {
		console.log(window.scrollY)
		if(window.scrollY > 100){
			this.setState({
				onTop: false,
			})
		}else{
			this.setState({
				onTop: true,
			})
		}
	}

    reSize = () => {
        if(window.innerWidth <= 550) {
            this.setState({isMobile: true})
        }
        else {
            this.setState({
                isMobile: false,
                isShow: false,
            })
        }
    }

    changeMobildMenu = () => {
        if(this.state.isMobile) {
            if(this.state.isShow) {
                this.setState({
                    isShow: false,
                })
            } else {
                this.setState({
                    isShow: true,
                })
            }
        }
    }

	render() {
        const { isMobile } = this.state;
        const { isShow } = this.state;
		const { onTop } = this.state;
        const NavLinkList = this.props.CurLang === 'en' ? NavLinkListEN : NavLinkListZH;
		return (
			<div style={ onTop ? headerNotScrollStyle : headerScrollStyle}>
				<nav style={ navbarStyle }>
					<div style={{ display: 'inline-block'}}>
						<Link style={{
                            fontSize: '36px',
                            textDecoration: 'none',
                            fontFamily: 'Adele',
                            color: (onTop? 'white':'black')
                        }} to="">ZoeLiao</Link>
					</div>
					<div style={ rightNavbarStyle }>
						{NavLinkList.map((link, id) => {
							return (
								<Link 
									style={ isMobile ? hide : {
                                        marginRight: '15px',
                                        textDecoration: 'none',
										color: (onTop? 'white':'black')
									}}
									to={link.url}
                                id={id}
								>
									{link.text}
								</Link>
							)
							})
						}

                        <a style={ isMobile ? hide : {
                            marginRight: '15px',
                            textDecoration: 'none',
                            color: (onTop? 'white':'black')
                        }} href="https://github.com/ZoeLiao" target="_blank">Github</a>

                        <a style={ isMobile ? hide :{
                            marginRight: '15px',
                            textDecoration: 'none',
                            color: (onTop? 'white':'black')
                        }} href="https://medium.com/@zoejoyuliao" target="_blank">Medium</a>
                        <div style={ isMobile ? hide : {
                            marginRight: '15px',
                            color: (onTop? 'white':'black'),
                            display: 'inline-block'
                        } }>
                            <SelectLanguage langs={this.props.langs} />
                        </div>

                        <div onClick={ this.changeMobildMenu } style={ isMobile ? hambuderIconDiv : { hide }}>
                            <div style={ isMobile ? hambugerIcon : hide }>
                            </div>
                            <div style={ isMobile ? hambugerIcon : hide }>
                            </div>
                            <div style={ isMobile ? hambugerIcon : hide }>
                            </div>
                        </div>

                        <br/>
                        <div style={ mobileMenuDiv }>
                            {NavLinkList.map((link) => {
                                return (
                                    <Link 
                                        style={ isShow ? mobileMenu: hide }
                                        to={link.url}
                                    >
                                        {link.text}
                                    </Link>
                                )
                                })
                            }
                            <a style={ isShow ? mobileMenu: hide } 
                               href="https://github.com/ZoeLiao" target="_blank">Github</a>
                            <a style={ isShow ? mobileMenu: hide } 
                               href="https://medium.com/@zoejoyuliao" target="_blank">Medium</a>
                        </div>
					</div>
				</nav>
			</div>
		)
	}
}


export default Header;
