import React, { Component } from 'react'
import PodcastItem from '../components/podcast-item'
import podcasts from '../podcast-array.json'

import './podcast-group.css'

class podcastGroup extends Component {
  constructor() {
    super();
    this.state = {
      todos: podcasts,
      currentPage: 1,
      todosPerPage: 8
    };

    this.handleClick = this.handleClick.bind(this);
    console.log(podcasts)
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {

      const { todos, currentPage, todosPerPage } = this.state;

      // Logic for displaying current todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

      const renderTodos = currentTodos.map((todo, index) => {
        return <PodcastItem
        id={todo.id}
        key={todo.id}
        name={todo.name}
        image={todo.image}
      />
      });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });


      return (

        <div>
        <section>
          <div className="columns is-gapless is-multiline">
          {renderTodos}
          </div>
        </section>
        <ul id="page-numbers">
        {renderPageNumbers}
      </ul>
      </div>
      );

  }
}
export default podcastGroup