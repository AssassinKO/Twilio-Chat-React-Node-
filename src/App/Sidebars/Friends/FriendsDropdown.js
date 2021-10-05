import React, {useState} from 'react'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import * as FeatherIcon from 'react-feather'

const FriendsDropdown = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle tag="span">
                <FeatherIcon.MoreHorizontal/>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>New chat</DropdownItem>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>Block</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
};

export default FriendsDropdown
