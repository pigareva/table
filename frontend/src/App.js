import React, { Component } from 'react';

import './App.css';
import logo from './logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          FeeLoo
        </header>
        <main className="App-main">
          <table className="Table">
            <tr className="TableRow">
              <td className="PageColumn Column">
                serp
              </td>
              <td className="DateColumn Column">
10.10.2018
              </td>
              <td className="TextColumn Column">
fdkbhvdflkbgfgkb nfbfgbfg
              </td>
            </tr>

            <tr className="TableRow">
              <td className="PageColumn Column">
                <span>
                  serp
                </span>

              </td>
              <td className="DateColumn Column">
                10.10.2018
              </td>
              <td className="TextColumn Column">
                fdkbhvdflkbgfgkb nfbfgbfg
              </td>
            </tr>

            <tr className="TableRow">
              <td className="PageColumn Column">
                serp
              </td>
              <td className="DateColumn Column">
                10.10.2018
              </td>
              <td className="TextColumn Column">
                fdkbhvdflkbgfgkb nfbfgbfg
              </td>
            </tr>

          </table>
        </main>
        <footer className="App-footer">

        </footer>
      </div>
    );
  }
}

export default App;
