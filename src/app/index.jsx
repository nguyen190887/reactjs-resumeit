import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

import ActionLink from './components/ActionLink.jsx';
import Toggle from './components/ToggleLink.jsx';
import LoggingButton from './components/LoggingButton.jsx';
import LoginControl from './components/greeting/LoginControl.jsx';
import NameForm from './components/forms/NameForm.jsx';
import Calculator from './components/forms/TemperatureCalculator.jsx';
import {WelcomeDialog, SignUpDialog} from './components/Dialog.jsx';
import {FilterableProductTable, PRODUCTS} from './components/ProductList.jsx';

import ReduxDemo from './components/ReduxDemo.jsx';
import counter from './reducers/Counter.jsx';

const store = createStore(counter);
// const store = {getState: ()=> {}, dispatch: ()=>{}};

class App extends React.Component {
  render () {
    return (
      <div>
        <ReduxDemo
          value={store.getState()}
          onIncrement={() => store.dispatch({type: 'INCREMENT'})}
          onDecrement={() => store.dispatch({type: 'DECREMENT'})} />
        <br />
        <ActionLink />
        <br />
        <Toggle />
        <br />
        <LoggingButton />
        <div>
          <LoginControl />
        </div>
        <hr />
        <NameForm />
        <hr />
        <Calculator />
        <hr />
        <WelcomeDialog />
        <hr />
        <SignUpDialog />
        <hr />
        <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
}

const _render = () => render(<App /> , document.getElementById('app'));

_render();
store.subscribe(_render);
