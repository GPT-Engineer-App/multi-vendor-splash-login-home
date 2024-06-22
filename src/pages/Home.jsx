import React from 'react';
import HomeFragment from './HomeFragment';
import CartFragment from './CartFragment';
import SearchFragment from './SearchFragment';

const Home = () => {
  return (
    <div className="p-4">
      <div className="tabs">
        <input type="radio" id="tab1" name="tab-control" defaultChecked />
        <input type="radio" id="tab2" name="tab-control" />
        <input type="radio" id="tab3" name="tab-control" />
        <ul>
          <li title="Home"><label htmlFor="tab1" role="button"><span>Home</span></label></li>
          <li title="Cart"><label htmlFor="tab2" role="button"><span>Cart</span></label></li>
          <li title="Search"><label htmlFor="tab3" role="button"><span>Search</span></label></li>
        </ul>
        <div className="slider"><div className="indicator"></div></div>
        <div className="content">
          <section>
            <HomeFragment />
          </section>
          <section>
            <CartFragment />
          </section>
          <section>
            <SearchFragment />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;