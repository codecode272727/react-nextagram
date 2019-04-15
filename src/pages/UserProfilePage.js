import React from 'react';
import UserImages from '../containers/UserImages';


class UserProfilePage extends React.Component {

    render(props) {
        const { id } = this.props.match.params
        const currentUser = this.props.users.find(user => user.id == id)

        console.log(currentUser)

        return (
            <div>
                <h2 className="username">{currentUser && currentUser.username}</h2>
                <img className='userimage' src={currentUser && currentUser.profileImage} />
                {/* {currentUser && currentUser.profileImage} */}

                <div className="userProfileImageContainer">
                    <UserImages userId={id} />
                </div>






            </div>


            //     {
            //         this.state.images.map((image, index) => {
            //             return <img src={image} key={index} className="userImages"
            //                 style={{ height: 200, width: 250 }} />
            //         })
            //     }
            // </div>

        )
    }
}

export default UserProfilePage