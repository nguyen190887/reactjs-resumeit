import React from 'react';
import {render} from 'react-dom';
import ActionLink from './components/ActionLink.jsx';
import Toggle from './components/ToggleLink.jsx';
import LoggingButton from './components/LoggingButton.jsx';
import LoginControl from './components/greeting/LoginControl.jsx';
import NameForm from './components/forms/NameForm.jsx';
import Calculator from './components/forms/TemperatureCalculator.jsx';
import {WelcomeDialog, SignUpDialog} from './components/Dialog.jsx';
import {FilterableProductTable, PRODUCTS} from './components/ProductList.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
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

render(<App /> , document.getElementById('app'));
