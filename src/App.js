import React, {Component} from 'react';
import arrow from './arrow-down.svg'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Container">
                    <span className="Title">Заголовок</span>
                    <div className="line"/>
                    <img src={arrow} className='arrow'/>
                    <select className="select">
                        <option>Селект</option>
                    </select>
                    <div className="subtitle">Строчный текст</div>
                    <div className="rowInput">
                        <input placeholder="Значение" className="input"/>
                        <div className="hyphen">-</div>
                        <input placeholder="Второе" className="input"/>
                    </div>
                    <button className="button">Кнопка</button>
                </div>
            </div>
        );
    }
}

export default App;
