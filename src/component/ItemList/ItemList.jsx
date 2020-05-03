import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import Item from '../Item/Item';
import './ItemList.css';

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: null,
      showDetail: null
    }

    props.dispatch({ type: 'ADD_ITEM', name: "Blue Shirt", description: "Lightweight cotton", available: 200, price: 10, key: v4() });
    props.dispatch({ type: 'ADD_ITEM', name: "Red Shirt", description: "Tagless comfort", available: 200, price: 10, key: v4() });
    props.dispatch({ type: 'ADD_ITEM', name: "Green Shirt", description: "Lightweight cotton", available: 200, price: 10, key: v4() });

  }

  handleClickShowDetail = event => {
    this.setState({ showDetail: event.target.name });
  }

  handleClickBackFromDetail = event => {
    this.setState({ showDetail: null });
  }

  handleClickEdit = event => {
    this.setState({ editing: event.target.name });
  }

  handleClickCancelEdit = event => {
    this.setState({ editing: null });
  }

  handleClickDeleteItem = event => {
    alert('delete');
  }

  handleClickSaveItem = (name, desc, avail, price, key) => {
    let data = this.props.data;
    data = data.map(item => {
      if (item.key === key) return { name: name, description: desc, available: avail, price: price, key: key }
      else return item;
    });
    this.setState({ editing: null, data: data });
  }

  render() {
    console.log(this.props.data)
    let ui = [];
    for (let i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i]) {
        ui.push(
          <Item key={this.props.data[i].key}>
            {this.state.editing && this.state.editing === this.props.data[i].key ?
              /* EDIT MODE */
              <React.Fragment>
                <div><label htmlFor='itemname'>Name: <input id='itemname' defaultValue={this.props.data[i].name} /></label></div>
                <div><label htmlFor='itemdesc'>Description: <input id='itemdesc' defaultValue={this.props.data[i].description}></input></label></div>
                <div><label htmlFor='itemavail'>Available: <input id='itemavail' defaultValue={this.props.data[i].available}></input></label></div>
                <div><label htmlFor='itemprice'>Price: <input id='itemprice' defaultValue={this.props.data[i].price}></input></label></div>
                <br />
                <div>
                  <button onClick={() => {
                    this.handleClickSaveItem(
                      document.getElementById('itemname').value,
                      document.getElementById('itemdesc').value,
                      document.getElementById('itemavail').value,
                      document.getElementById('itemprice').value,
                      this.props.data[i].key
                    )
                  }} name={this.props.data[i].key}>Save</button>
                  <button onClick={this.handleClickDeleteItem} name={this.props.data[i].key}>Delete Item</button>
                  <button onClick={this.handleClickCancelEdit} name={this.props.data[i].key}>Cancel</button>
                </div>
              </React.Fragment>
              :
              this.state.showDetail && this.state.showDetail === this.props.data[i].key ?
                /* DETAIL MODE */
                <React.Fragment>
                  <h1>Details</h1>
                  <h3>{this.props.data[i].name}</h3>
                  <p><em>{this.props.data[i].description}</em></p>
                  <p>Available: {this.props.data[i].available} | Price: {this.props.data[i].price}</p>
                  <button onClick={this.handleClickBackFromDetail} name={this.props.data[i].key}>Back</button>
                </React.Fragment>
                :
                /* NORMAL MODE */
                <React.Fragment>
                  <h3>{this.props.data[i].name}</h3>
                  <p><em>{this.props.data[i].description}</em></p>
                  <p>Available: {this.props.data[i].available} | Price: {this.props.data[i].price}</p>
                  <button onClick={this.handleClickEdit} name={this.props.data[i].key}>Edit</button>
                  <button onClick={this.handleClickShowDetail} name={this.props.data[i].key}>Details</button>
                </React.Fragment>
            }
          </Item>
        )
      }
    }
    return <div>{ui}</div>;
  }
}

const mapStateToProps = state => { return { data: state }; }
ItemList = connect(mapStateToProps)(ItemList);
export default ItemList;