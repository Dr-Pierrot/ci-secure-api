import React from 'react';
import { loadUser } from '../../../utility/LocalStorage';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { formatDate } from '../../../utility/Formatter';

const UserProfile = () => {
    const user = loadUser();
    return (
        <div className='centredDiv' style={{ marginTop: '50px' }}>
            <Card>
                <CardImg
                    top
                    width='50%'
                    src='https://bit.ly/3kBevZ0'
                    alt='Card image cap'
                />
                <CardBody>
                    <CardTitle>{user.name}</CardTitle>
                    <CardText>{user.email}</CardText>
                    <CardText>
                        <small className='text-muted'>
                            Account created on {formatDate(user.created_at)}
                        </small>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};
export default UserProfile;
 