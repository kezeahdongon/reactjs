import { Fragment, useState } from 'react';

import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
    // useState(false) --registering it with react so that react can manage the state for us.
    // and then getting access to the latest snapshot trhrough [CartIsShown] parameter when ever the function is re-evaluated,
    // and getting access to the [setCartIsShown] parameter which allows us to update the state.

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
