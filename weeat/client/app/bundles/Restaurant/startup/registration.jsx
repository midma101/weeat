import ReactOnRails from 'react-on-rails';

import Restaurant from '../components/Restaurant';
import RestaurantList from '../components/RestaurantList';
import Map from '../components/Map';
import MainView from '../components/MainView';
import FilterView from '../components/FilterView';
import ModalView from '../components/ModalView';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Restaurant,
  RestaurantList,
  Map,
  MainView,
  FilterView,
  ModalView,
});
