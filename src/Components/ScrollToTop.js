import React, { Component } from 'react';
import './ScrollToTop.css';

export default class ScrollToTop extends Component {

    state = {
        outOfRange: false,
    };

    goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    revealScroll = () => {
        if (window.pageYOffset > 400) {
            this.setState({ outOfRange: true });
        }
        else {
            this.setState({ outOfRange: false });
        }
    }

    render() {
        window.onscroll = () => {
            this.revealScroll();
        }
        return (
            <div className={(this.state.outOfRange) ? "scroll-to-top" : "scroll-to-top-hidden"} onClick={this.goToTop}>
                <div className="arrow-left"></div>
                <div className="arrow-right"></div>
            </div>
        )
    }
}