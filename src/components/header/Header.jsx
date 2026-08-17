import React from 'react';
import Logo from './Logo';

import { useDispatch } from 'react-redux';
import { setSearch } from '../../reducers/eventReducer';

export default () => {
    const dispatch = useDispatch();
    const setSearchVal = (evt) =>{
      if (evt.which === 13 || evt.keyCode === 13) {
        evt.preventDefault();
        dispatch(setSearch(evt.target.value));
        return false;
       }
        else return true;
    }
    return(
    <header> 
        <Logo />
      <div id="form">
        <input type="text" id="search" className="search" onKeyUp={setSearchVal} placeholder="Search" />
      </div>
    </header>
    );
}
