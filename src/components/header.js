import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="header">
                <span className="place">Mumbai</span>
                <span className="time">19:50</span>
            </div>
        )
    }
}

export default Header;