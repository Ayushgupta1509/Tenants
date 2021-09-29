import React, { Component } from 'react'
import Item, { Items } from './Items'


export class New extends Component {
    render() {
        return (
           
                <div className="container my-3 text-center" >
            <h1>POT: Place Of Tenants</h1>
            <h1>Welcome to our real state Properties </h1>
            <p>Why wander around the places for home, when you can wander POT </p>
            
                    <div className="row">
                   <div className="col-md-4">
                       <Items title="Red Ford" description="Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006 " bhk="3BHK Apartment 1000sqft" Rs="Rent starts from Rs=5000" imageUrl="https://i.ibb.co/sWMwXgj/Adobe-Stock-163867633-Preview.jpg"/>
                   </div>
                   <div className="col-md-4">
                       <Items title="Jantar Mantar" description="Connaught Place, Sansad Marg, New Delhi, Delhi 110001" bhk="2BHK Villa 1000sqft" Rs="Rent starts from Rs=9000" imageUrl="https://i.ibb.co/ypWQj5F/Adobe-Stock-304367106-Preview.jpg"/>
                   </div>
                   <div className="col-md-4">
                       <Items title="Hawa mahal" description="Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002" bhk="1BHK Apartment 1500sqft" Rs="Rent starts from Rs=1000" imageUrl="https://i.ibb.co/ZXkQYmM/Adobe-Stock-252885181-Preview.jpg"/>
                   </div>
                   <div className="col-md-4">
                       <Items title="Jal mahal" description=" Amer Rd, Jal Mahal, Amer, Jaipur, Rajasthan 302002." bhk="4BHK Villa 1000sqft" Rs="Rent starts from Rs=15000" imageUrl="https://i.ibb.co/fq2bZY3/Adobe-Stock-359050883-Preview.jpg"/>
                   </div>
                   <div className="col-md-4">
                       <Items title="Amer Fort" description=" Devisinghpura, Amer, Jaipur, Rajasthan 302001" bhk="3BHK Villa 1500sqft" Rs="Rent starts from Rs10000" imageUrl="https://i.ibb.co/9ZcC1h0/Adobe-Stock-277597560-Preview.jpg" />
                   </div>
                   <div className="col-md-4">
                       <Items title="Albert hall" description=" Museum Rd, Ram Niwas Garden, Kailash Puri, Adarsh Nagar, Jaipur, Rajasthan 302004." bhk="2BHK Apartment 1000sqft" Rs="Rent starts from Rs=7000" imageUrl="https://i.ibb.co/bsfMrk0/Adobe-Stock-313810055-Preview.jpg"/>
                   </div>
                   <div className="col-md-4">
                       <Items title="Furnish Apartment" description="Sector 21, Mansarovar, Jaipur, Rajasthan 302019." bhk="2BHK Apartment 1500sqft" Rs="Rent starts from Rs=4000" imageUrl="https://i.ibb.co/NFbN8Xs/Adobe-Stock-427646976-Preview.jpg"/>
                   </div>
                   <div className="col-md-4">
                       <Items title="Unfurnish Apartment" description="Multi Sector SEZ, PO Mahindra World City, 302037" bhk="3BHK Villa 1500sqft" Rs="Rent starts from Rs=6000" imageUrl="https://i.ibb.co/VSdsnjT/Adobe-Stock-300015775-Preview.jpg"/>
                   </div>
                   <div className="col-md-4">
                       <Items title="Semi-furnish Apartment" description="Sangram Colony, Ashok Nagar, Jaipur, Rajasthan 302007." bhk="2BHK Apartment 1000sqft" Rs="Rent starts from Rs=8000" imageUrl="https://i.ibb.co/yp18m1w/Adobe-Stock-238455938-Preview.jpg"/>
                   </div>
            </div>
            </div>
        )
    }
}

export default New
