import React, { Component } from 'react';
import ReactTable from "react-table";

import 'react-table/react-table.css'
import './App.css';
import logo from './logo.png'

class App extends Component {
  componentDidMount() {

  }

  render() {
    const data = [{
      page: 'serp',
      date: '10.10.2000',
      text: 'texxt dm;gnfbgbmgb'
    },
      {
        page: 'select',
        date: '11.11.2000',
        text: 'texxt dm;gnfbgbmgb'
      },
      {
        page: 'serp',
        date: '12.12.2012',
        text: 'texxt dm;gnfbgbmcbvbvnbvnngb'
      }
    ];

    const columns = [{

      accessor: 'page',
      className: 'Column PageColumn'
    }, {

      accessor: 'date',
      className: 'Column DateColumn'
    }, {

      accessor: 'text',
      className: 'Column TextColumn'
    },
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          Unsere Kunden sagen:
        </header>
        <main className="App-main">
          <ReactTable
            data={data}
            columns={columns}
            showPagination={false}
            defaultPageSize={3}
          />
        </main>
        <footer className="App-footer">

        </footer>
      </div>
    );
  }
}

export default App;
