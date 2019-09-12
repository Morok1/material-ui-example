import React, {Component} from 'react';
import { Menu } from "semantic-ui-react";

class Header extends Component {
    render() {
        return (
            <div>
                <Menu borderless inverted pointing color="blue">
                    <Container>
                        <Menu.Item header active>
                            Home
                        </Menu.Item>
                        <Menu.Item>New feature</Menu.Item>
                        <Menu.Item>Press</Menu.Item>
                        <Menu.Item>New hires</Menu.Item>
                        <Menu.Item>About</Menu.Item>
                    </Container>
                </Menu>
            </div>
        );
    }
}

export default Header;
