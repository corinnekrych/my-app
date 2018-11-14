import React, { Component } from 'react';
import '../../App.css'

class User extends Component {
  render() {
    return (
      <div className="top-raw__padding col-md-10">
        <div className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.name}</div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Username</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.username}</div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.email}</div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Address</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.address.street}</div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Address suite</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.address.suite}</div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">City</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.address.city}</div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Zip code</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.address.zipcode}</div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Latitude</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.address.geo.lat}</div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Longitude</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.address.geo.lng}</div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Company</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.company.name}</div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Company's catchphrase</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.company.catchPhrase}</div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Company's BS</label>
            <div className="col-sm-10">
              <div type="text">{this.props.user.company.bs}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
