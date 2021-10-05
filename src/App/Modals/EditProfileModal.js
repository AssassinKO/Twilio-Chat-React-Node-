import React, {useState} from 'react'
import {
    Modal,
    ModalBody,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    ModalHeader,
    Input,
    InputGroupAddon,
    InputGroup,
    InputGroupText,
    CustomInput
} from 'reactstrap'
import * as FeatherIcon from 'react-feather'
import classnames from 'classnames'
import ManAvatar4 from '../../assets/img/man_avatar4.jpg'

function EditProfileModal(props) {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} centered className="modal-dialog-zoom">
                <ModalHeader toggle={props.toggle}>
                    <FeatherIcon.Edit2 className="mr-2"/> Edit Profile
                </ModalHeader>
                <ModalBody>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab === '1'})}
                                onClick={() => {
                                    toggle('1');
                                }}
                            >
                                Personal
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab === '2'})}
                                onClick={() => {
                                    toggle('2');
                                }}
                            >
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab === '3'})}
                                onClick={() => {
                                    toggle('3');
                                }}
                            >
                                Social Links
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Form>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <FormGroup>
                                    <Label for="fullname">Fullname</Label>
                                    <InputGroup>
                                        <Input type="text" name="fullname" id="fullname"/>
                                        <InputGroupAddon addonType="append">
                                            <Button color="light">
                                                <FeatherIcon.User/>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="avatar">Avatar</Label>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <figure className="avatar mr-3 item-rtl">
                                                <img src={ManAvatar4} className="rounded-circle" alt="avatar"/>
                                            </figure>
                                        </div>
                                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile"/>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <InputGroup>
                                        <Input type="text" name="city" id="city" placeholder="Ex: Columbia"/>
                                        <InputGroupAddon addonType="append">
                                            <Button color="light">
                                                <FeatherIcon.Target/>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <InputGroup>
                                        <Input type="text" name="phone" id="phone" placeholder="(555) 555 55 55"/>
                                        <InputGroupAddon addonType="append">
                                            <Button color="light">
                                                <FeatherIcon.Phone/>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phone">Website</Label>
                                    <InputGroup>
                                        <Input type="text" name="website" id="website" placeholder="https://"/>
                                        <InputGroupAddon addonType="append">
                                            <Button color="light">
                                                <FeatherIcon.Link/>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </TabPane>
                            <TabPane tabId="2">
                                <FormGroup>
                                    <Label for="about">Write a few words that describe you</Label>
                                    <Input type="textarea" name="about" id="about"/>
                                </FormGroup>
                                <FormGroup>
                                    <CustomInput type="checkbox" id="customCheckbox1" label="View profile" defaultChecked/>
                                </FormGroup>
                            </TabPane>
                            <TabPane tabId="3">
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="facebook" id="facebook" placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-facebook">
                                                <i className="fa fa-facebook"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="twitter" id="twitter" placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-twitter">
                                                <i className="fa fa-twitter"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="instagram" id="instagram" placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-instagram">
                                                <i className="fa fa-instagram"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="linkedin" id="linkedin" placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-linkedin">
                                                <i className="fa fa-linkedin"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="dribbble" id="dribbble" placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-dribbble">
                                                <i className="fa fa-dribbble"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="youtube" id="youtube" placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-youtube">
                                                <i className="fa fa-youtube"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="google" id="google" placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-google">
                                                <i className="fa fa-google"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="whatsapp" id="whatsapp" placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-whatsapp">
                                                <i className="fa fa-whatsapp"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </TabPane>
                        </TabContent>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditProfileModal
