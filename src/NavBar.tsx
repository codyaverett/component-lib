import * as React from "react";

interface NavBarProps {
    title: string;
    children?: any
}

export class NavBar extends React.Component<NavBarProps, {}> {
    constructor(props: NavBarProps) {
        super(props);
    }

    render() {
        return (
            <div> hallo </div>
        );
    }
}
