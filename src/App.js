import React, { Component } from 'react';
import './App.css';
import DisplayList from './DisplayList';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:'',
      },
    };
  }
  addInput=(e)=>{
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now(),
      }}
    )
  }

  addButton=(e)=>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !== "")
    {
      const newItems = [newItem, ...this.state.items];
      console.log(newItems);
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:'',
        }
      })
    }
  }

  dltTodo =(key)=>{
    const deletePlan = this.state.items.filter((item)=>item.key !== key);
    this.setState({
      items:deletePlan,
    })
  }
  makeUpdate=(text, key)=>{
    const items = this.state.items;
    items.map((item)=>{
      if(item.key === key){
        item.text=text;
      }

    })
    this.setState({
      items:items,
    })
  }
  render() {
    return (
      <div className="App">
      <header className="header">
        <form id="to-do-form" onSubmit={this.addButton}>
          <h1>To Do List</h1>
          <input type="text" placeholder="Todays plan" value={this.state.currentItem.text} onChange={this.addInput}/>
          <button type="submit">ADD</button>
        </form>
        <DisplayList items={this.state.items} dltTodo={this.dltTodo}  makeUpdate={this.makeUpdate}/>
      </header>
      </div>
    );
  }
}

export default App;
