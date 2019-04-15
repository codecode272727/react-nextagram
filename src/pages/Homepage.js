import React from 'react';
import UserImages from '../containers/UserImages';
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Homepage = (props) => {

    return (
        <div>

            {
                props.users.map((user, index) =>
                    <div key={index} className="homepage-container container-fluid bg-antique">
                        <div className="profileimageContainer">
                            <Link to={`/users/${user.id}`}>
                                <h2 > {user.username}
                                    <br />
                                    <img className='image' src={user.profileImage} />
                                </h2>
                                <Button />
                            </Link>

                        </div>
                        <div className="imageContainer">
                            <UserImages userId={user.id} />
                        </div>

                    </div>

                )
            }


        </div>



    )
}







export default Homepage;