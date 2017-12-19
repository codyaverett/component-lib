import * as React from "react";

interface NavBarProps {
    title: string;
}

export default class NavBar extends React.Component {
    constructor(props: NavBarProps) {
        super(props);
    }

    render() {
        return (
            <div> hallo </div>
        );
    }
}