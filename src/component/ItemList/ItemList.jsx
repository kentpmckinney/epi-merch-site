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

  handleClickEdit = event => {
    this.setState({ editing: event.target.id });
  }

  handleClickCancelEdit = event => {
    this.setState({ editing: null });
  }

  handleClickDeleteItem = event => {
    this.props.dispatch({ type: 'DELETE_ITEM', key: event.target.id });
  }

  handleClickSaveItem = (name, description, available, price, key) => {
    this.props.dispatch({ type: 'EDIT_ITEM', name, description, available, price, key });
    this.setState({ editing: null });
  }

  generateNormalModeUI(item) {
    return (
      <React.Fragment>
        <h3>{item.name}</h3>
        <p><em>{item.description}</em></p>
        <p>Available: {item.available} | Price: {item.price}</p>
        <button onClick={this.handleClickEdit} id={item.key}>Edit</button>
      </React.Fragment>
    );
  }

  generateEditModeUI(item) {
    return (
      <React.Fragment>
        <div><label htmlFor='itemname'>Name: <input id='itemname' defaultValue={item.name} /></label></div>
        <div><label htmlFor='itemdesc'>Description: <input id='itemdesc' defaultValue={item.description}></input></label></div>
        <div><label htmlFor='itemavail'>Available: <input id='itemavail' defaultValue={item.available}></input></label></div>
        <div><label htmlFor='itemprice'>Price: <input id='itemprice' defaultValue={item.price}></input></label></div>
        <br />
        <div>
          <button onClick={() => {
            this.handleClickSaveItem(
              document.getElementById('itemname').value,
              document.getElementById('itemdesc').value,
              document.getElementById('itemavail').value,
              document.getElementById('itemprice').value,
              item.key
            )
          }} name={item.key}>Save</button>
          <button onClick={this.handleClickDeleteItem} id={item.key}>Delete Item</button>
          <button onClick={this.handleClickCancelEdit} id={item.key}>Cancel</button>
        </div>
      </React.Fragment>
    )
  }

  render() {
    let ui = [];
    for (let i = 0; i < this.props.data.length; i++) {
      const item = this.props.data[i];
      if (item) {
        ui.push(
          <Item key={item.key}>
            {this.state.editing && this.state.editing === item.key ? this.generateEditModeUI(item) : this.generateNormalModeUI(item)}
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