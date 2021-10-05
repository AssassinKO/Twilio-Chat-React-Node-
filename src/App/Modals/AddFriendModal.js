import React, {useState} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Tooltip,
    Alert,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

// Feather icon
import * as FeatherIcon from 'react-feather';

function AddFriendModal() {
    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const tooltipToggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <div>
            <button className="btn btn-outline-light" onClick={modalToggle} id="Tooltip-Add-Friend">
                <FeatherIcon.UserPlus/>
            </button>
            <Tooltip
                placement="bottom"
                isOpen={tooltipOpen}
                target={"Tooltip-Add-Friend"}
                toggle={tooltipToggle}>
                Add Friend
            </Tooltip>
            <Modal className="modal-dialog-zoom" isOpen={modal} toggle={modalToggle} centered>
                <ModalHeader toggle={modalToggle}>
                    <FeatherIcon.UserPlus className="mr-2"/> Add Friends
                </ModalHeader>
                <ModalBody>
                    <Alert color="info">Send invitations to friends.</Alert>
                    <Form>
                        <FormGroup>
                            <Label for="email">Email addresses</Label>
                            <Input type="text" name="email" id="email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Invitation message</Label>
                            <Input type="textarea" name="message" id="message"/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={modalToggle}>Submit</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddFriendModal
