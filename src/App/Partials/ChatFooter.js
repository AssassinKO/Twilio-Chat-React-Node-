import React from 'react'
import {Button, Input} from 'reactstrap'
import * as FeatherIcon from 'react-feather'
import WomenAvatar5 from "../../assets/img/women_avatar5.jpg";
import {useDispatch, useSelector} from "react-redux";

function ChatFooter(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            name: 'Mirabelle Tow',
            avatar: <figure className="avatar">
                <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
            </figure>,
            text: props.inputMsg,
            date: 'Now',
            type: 'outgoing-message'
        })
    };

    const handleChange = (e) => {
        props.onChange(e.target.value)
    };

    return (
        <div className="chat-footer">
            <form onSubmit={handleSubmit}>
                <div>
                    <Button color="light" className="mr-3" title="Emoji">
                        <FeatherIcon.Smile/>
                    </Button>
                </div>
                <Input type="text" className="form-control" placeholder="Write a message." value={props.inputMsg}
                       onChange={handleChange}/>
                <div className="form-buttons">
                    <Button color="light">
                        <FeatherIcon.Paperclip/>
                    </Button>
                    <Button color="light" className="d-sm-none d-block">
                        <FeatherIcon.Mic/>
                    </Button>
                    <Button color="primary">
                        <FeatherIcon.Send/>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ChatFooter
