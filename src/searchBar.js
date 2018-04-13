import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
  <div className="searchContainer">

  <h2 id="title">Dont Forget</h2>

  <form onChange={this.props.onChange}>
    <div className="group">
      <input type="text" required></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Task</label>
    </div>
  </form>
</div>

    )
  }
}


export default SearchBar;
