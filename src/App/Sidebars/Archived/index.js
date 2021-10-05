import React from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import ArchivedDropdown from "./ArchivedDropdown"
import {archivedChats} from "./Data"
import * as FeatherIcon from "react-feather"

function Index() {

    const mobileMenuBtn = () => document.body.classList.toggle('navigation-open');

    return (
        <div className="sidebar active">
            <header>
                <div className="d-flex align-items-center">
                    <button onClick={mobileMenuBtn} className="btn btn-outline-light mobile-navigation-button mr-3 d-xl-none d-inline">
                        <FeatherIcon.Menu/>
                    </button>
                    <span className="sidebar-title">Archived</span>
                </div>
            </header>
            <form>
                <input type="text" className="form-control" placeholder="Search archived"/>
            </form>
            <div className="sidebar-body">
                <PerfectScrollbar>
                    <ul className="list-group list-group-flush">
                        {
                            archivedChats.map((chat, i) => {
                                return <li key={i} className="list-group-item">
                                    {chat.avatar}
                                    <div className="users-list-body">
                                        <div>
                                            <h5>{chat.name}</h5>
                                            <p>{chat.title}</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <ArchivedDropdown/>
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
