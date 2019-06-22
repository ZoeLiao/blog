import React, { Component } from 'react'
import { Link } from 'gatsby'

// TODO: move into data/languages.js
const langsDict = {
    'en': 'English',
    'zh': '繁中'
}

const dropDownMenuContent = {
  display: 'block',
  position: 'absolute',
  backgroundColor: 'white',
  minWidth: '80px',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: '1',
  textAlign: 'center',
  marginTop: '10px',
}

const dropDownMenuLink = {
    textDecoration: 'none',
    display: 'block',
    height: '35px',
    marginTop: '5px',
}

const dropDownMenuUnSelectedLink = Object.assign(
    {},
    dropDownMenuLink,
    { color: 'grey' }
)

const dropDownMenuSelectedLink = Object.assign(
    {},
    dropDownMenuLink,
    { color: 'black' }
)

class DropdownButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayMenu: false
        }
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    showDropdownMenu(event){
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu(){
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    render(){
        const items = this.props.links.map((lang) =>
            <Link
                style={
                    (lang.selected ? dropDownMenuSelectedLink : dropDownMenuUnSelectedLink)
                }
                to={ lang.link }
                key={ lang.langKey }
            >
                { langsDict[lang.langKey] }
            </Link>
        )
        return (
            <div>
                <div onClick={ this.showDropdownMenu } style={{ cursor: 'pointer' }}>
                    { this.props.title }
                </div>
                { this.state.displayMenu ? (
                   <div style={ dropDownMenuContent }>
                      { items }
                   </div>
                ): (null) }
            </div>
        )
    }
}

export default DropdownButton
