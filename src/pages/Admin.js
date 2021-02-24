import React, { useState } from 'react'
import { API, graphqlOperation, Storage } from "aws-amplify";
import { v4 as uuidv4 } from 'uuid';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { createItem} from '../api/mutations'
import config from '../aws-exports'
import { useHistory } from "react-router-dom";

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const Admin = () => {
    const [image, setImage] = useState(null);
    const [itemDetails, setItemDetails] = useState({ itemSeller: "", itemName:"", description: "", 
    image: "", featured: true, curPrice: "", endDate:"" });
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!itemDetails.itemName || !itemDetails.itemSeller) return
            await API.graphql(graphqlOperation(createItem, { input: itemDetails }))
            setItemDetails({ itemSeller: "", itemName:"", description: "", 
            image: "", featured: true, curPrice: "", endDate:"" })
            history.push("/");
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level. 
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' })
            setImage(image);
            setItemDetails({ ...itemDetails, image: url });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="admin-wrapper">
            <AmplifyAuthenticator>
                <section>
                    <header className="form-header">
                        <h3>Add New Item</h3>
                        <AmplifySignOut></AmplifySignOut>
                    </header>
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div className="form-image">
                            {image ? <img className="image-preview" src={image} alt="" /> : <input
                                type="file"
                                accept="image/jpg"
                                onChange={(e) => handleImageUpload(e)} />}

                        </div>
                        <div className="form-fields">
                            <div className="title-form">
                                <p><label htmlFor="itemSeller">Seller Name / Nickname</label></p>
                                <p><input
                                    name="seller"
                                    type="title"
                                    placeholder="Type your name"
                                    onChange={(e) => setItemDetails({ ...itemDetails, itemSeller: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="title-form">
                                <p><label htmlFor="itemName">Item Title</label></p>
                                <p><input
                                    name="itemName"
                                    type="text"
                                    placeholder="Listing Name for Item"
                                    onChange={(e) => setItemDetails({ ...itemDetails, itemName: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="description-form">
                                <p><label htmlFor="description">Description</label></p>
                                <p><textarea
                                    name="description"
                                    type="text"
                                    rows="8"
                                    placeholder="Type a description of the item"
                                    onChange={(e) => setItemDetails({ ...itemDetails, description: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="price-form">
                                <p><label htmlFor="price">Price ($)</label>
                                    <input
                                        name="price"
                                        type="text"
                                        placeholder="What is the starting price of the Item (USD)"
                                        onChange={(e) => setItemDetails({ ...itemDetails, curPrice: e.target.value })}
                                        required
                                    /></p>
                            </div>
                            <div className="endDate-form">
                                <p><label htmlFor="endDate">Auction End Date</label></p>
                                <p><input
                                    name="endDate"
                                    type="Date"
                                    placeholder=""
                                    onChange={(e) => setItemDetails({ ...itemDetails, endDate: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="submit-form">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Admin
