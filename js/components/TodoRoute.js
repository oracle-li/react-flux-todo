'use strict';
let React = require('react');
let cx = require('../utils/util').cx;

let TodoRoute = React.createClass({
  render: function() {
    return (
      <footer className="todo__footer">
        <span id="todo-count">
          <strong>{this.props.count}</strong> items left
        </span>
        <ul id="filters">
          <li>
            <a
              href="#/"
              className={cx({selected: this.props.now === ''})}>
                All
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/active"
              className={cx({selected: this.props.now === 'active'})}>
                Active
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/completed"
              className={cx({selected: this.props.now === 'completed'})}>
                Completed
            </a>
          </li>
        </ul>
      </footer>
    );
  }
    
});



module.exports = TodoRoute;