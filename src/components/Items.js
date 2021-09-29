import React, { Component } from 'react'

export class Items extends Component {
    render() {
        let {title, description,bhk,Rs, imageUrl} = this.props;
        return ( 
            <div className="my-3">
                <div className="card" >
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="card-text">{bhk}</h6>
                    <h6 className="card-text">{Rs}</h6>
                    <a href="/newsdetail" className="btn btn-sm btn-primary">Contact Owner </a>
                </div>
                </div>
            </div>
        )
    }
}

export default Items