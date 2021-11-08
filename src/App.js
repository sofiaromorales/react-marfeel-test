import React from 'react'

import Articles from './components/Articles'
import FloatingHamburgerMenu from './components/FloatingHamburgerMenu'
import Header from './components/Header'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hideHeader:  false }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 1000) {
            this.setState({
                hideHeader: true
            })
        } else {
            this.setState({
                hideHeader: false
            })
        }
    }

    render() {
        return (
            <div className='App'>
                <div className={`menu ${this.state.hideHeader ? 'menu-hidden' : ''}`}>
                    <Header/>
                </div>
                <Articles/>
                {this.state.hideHeader &&
                    <FloatingHamburgerMenu/>
                }
                <div className='Feed' style={{height: '10000px'}}>
                </div>
            </div>
        )
    }
}

export default App
