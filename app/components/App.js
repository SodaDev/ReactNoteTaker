import routes from '../config/routes';
import React  from 'react';
import Router from 'react-router';


Router.run(routes, (Root, state) => {
     React.render(<Root {...state}/>, document.getElementById('app'));
});