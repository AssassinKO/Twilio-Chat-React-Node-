import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Tour from 'reactour'
import TourModal from "./Modals/TourModal"
import SidebarIndex from "./Sidebars/index"
import Navigation from "./Navigation"
import Profile from "./Sidebars/Profile"
import Chat from "./Partials/Chat"
import {pageTourAction} from "../Store/Actions/pageTourAction"
import {profileAction} from "../Store/Actions/profileAction";
import DisconnectedModal from "./Modals/DisconnectedModal";

function Layout() {

    const {pageTour} = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        document.querySelector('*').addEventListener('click', (e) => {
            if (document.body.classList.contains('navigation-open') && e.target.nodeName === 'BODY') {
                document.body.classList.remove('navigation-open')
            }
        });
    }, []);

    const tourSteps = [
        {
            selector: '#Tooltip-New-Chat',
            content: 'You can create a new chat here.',
        },
        {
            selector: '#Tooltip-Add-Group',
            content: 'You can start a new group to chat with all your friends.',
        },
        {
            selector: '#Tooltip-2',
            content: 'Layout and messages you\'ve added to your favorites appear here.',
        },
        {
            selector: '#Tooltip-3',
            content: 'Layout and messages you\'ve archived appear here.',
        },
        {
            selector: '.layout .content .sidebar-group .sidebar .list-group-item:first-child',
            content: 'Select a chat to send a message.',
        },
        {
            selector: '#user-menu',
            content: 'Here you can manage your personal information and settings.',
        }
    ];

    return (
        <div className="layout">
            <Tour
                steps={tourSteps}
                isOpen={pageTour}
                onRequestClose={() => dispatch(pageTourAction(false))}
            />
            <div className="content">
                <Navigation/>
                <SidebarIndex/>
                <Chat/>
                <Profile/>
                <TourModal/>
                <DisconnectedModal/>
            </div>
        </div>
    )
}

export default Layout
