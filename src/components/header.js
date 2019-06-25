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


const navbarStyle = {
    marginTop: '-10px',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: 860,
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
        }
    }

	componentDidMount() {
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

	render() {
		const { onTop } = this.state;
        const NavLinkList = this.props.CurLang == 'en' ? NavLinkListEN : NavLinkListZH;
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
						{NavLinkList.map((link) => {
							return (
								<Link 
									style={{
                                        marginRight: '15px',
                                        textDecoration: 'none',
										color: (onTop? 'white':'black')
									}}
									to={link.url}
								>
									{link.text}
								</Link>
							)
							})
						}
						<a style={{ 
                            marginRight: '15px',
                            textDecoration: 'none',
                            color: (onTop? 'white':'black')
                        }} href="https://github.com/ZoeLiao" target="_blank">Github</a>
                        <div style={{
                            marginRight: '15px',
                            color: (onTop? 'white':'black'),
                            display: 'inline-block'
                        }}>
                            <SelectLanguage langs={this.props.langs} />
                        </div>
					</div>
				</nav>
			</div>
		)
	}
}


export default Header;
