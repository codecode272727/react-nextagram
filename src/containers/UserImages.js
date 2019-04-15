import React from 'react';
import axios from 'axios';
import Image from "react-graceful-image";

class UserImages extends React.Component {
    state = {
        images: [],

    }

    componentDidMount() {
        const { userId } = this.props

        axios.get('https://insta.nextacademy.com/api/v1/images/?userId=' + userId)
            .then(result => {
                console.log(result)
                this.setState({ images: result.data })
            })
    }

    render() {
        return (
            <>
                {
                    this.state.images.map((image, index) => {
                        return <Image src={image}
                            key={index} className="userImages"
                            height="150" width="250" retry={{ count: 1, delay: 0 }} />
                    })
                }
            </>
        )
    }
}

export default UserImages;

