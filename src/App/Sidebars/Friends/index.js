import React from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import AddFriendsModal from "../../Modals/AddFriendModal"
import FriendsDropdown from "./FriendsDropdown"
import {friendLists} from "./Data"
import * as FeatherIcon from "react-feather";

function Index() {

    const mobileMenuBtn = () => document.body.classList.toggle('navigation-open');

    return (
        <div className="sidebar active">
            <header>
                <div className="d-flex align-items-center">
                    <button onClick={mobileMenuBtn} className="btn btn-outline-light mobile-navigation-button mr-3 d-xl-none d-inline">
                        <FeatherIcon.Menu/>
                    </button>
                    <span className="sidebar-title">Friends</span>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <AddFriendsModal/>
                    </li>
                </ul>
            </header>
            <form>
                <input type="text" className="form-control" placeholder="Search friends"/>
            </form>
            <div className="sidebar-body">
                <PerfectScrollbar>
                    <ul className="list-group list-group-flush">
                        {
                            friendLists.map((item, i) => {
                                return <li key={i} className="list-group-item">
                                    {item.avatar}
                                    <div className="users-list-body">
                                        <div>
                                            <h5>{item.name}</h5>
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <FriendsDropdown/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </PerfectScrollbar>
            </div>
        </div>
    )
}

export default Index
