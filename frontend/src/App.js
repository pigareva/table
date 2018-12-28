import React, { Component } from 'react';
import ReactTable from "react-table";

import 'react-table/react-table.css'
import './App.css';
import logo from './logo.png'

const defaultPageSize = 3;

class App extends Component {
  constructor(props) {
    super(props);

    this.selectFeedback = this.selectFeedback.bind(this);
    this.startTime = this.startTime.bind(this);

    this.state = {
      data: null,
      feedbacks: null,
    }
  }
  async componentDidMount() {
    const res = await fetch('https://api.billiger-mietwagen.de/v1/survey');
    const json = await res.json();
    const array  = json.survey.filter((feedback) => feedback.text && (feedback.text.length > 20));
    const feedbacks = array.map(item => ({
      page: item.page,
      date: item.date,
      text: item.text.toString()
    }))
      .sort((a,b) => a.date - b.date);

    this.setState({ feedbacks });
    this.startTime();
  }

  selectFeedback() {
    this.setState({ data: this.state.feedbacks.slice(this.setNumber, this.setNumber + defaultPageSize )});
    this.setNumber +=defaultPageSize;
    if (this.state.feedbacks.length - this.setNumber < 3) {
      this.setNumber = 0;
    }
  }

  startTime() {
    this.setNumber = 0;
    this.timerID = setInterval(
      () => this.selectFeedback(),
      10000,
    );
  }

  render() {
    const data = this.state.data;

    const columns = [{
      accessor: 'page',
      className: 'Column PageColumn'
    }, {

      accessor: 'date',
      className: 'Column DateColumn'
    }, {

      accessor: 'text',
      className: 'Column TextColumn',
      Cell: props => <span dangerouslySetInnerHTML={{ __html:props.value }} />
    },
    ];

    const table = <ReactTable
      data={data}
      columns={columns}
      showPagination={false}
      defaultPageSize={defaultPageSize}
    />;

    return (
      <div className="App">
        <header className="App-header">
          Unsere Kunden sagen:
          <img src={logo} alt="logo" />
        </header>

        <main className="App-main">
          {
            data ? table : <div>Loading...</div>
          }
        </main>

        <footer className="App-footer">

        </footer>
      </div>
    );
  }
}

export default App;
