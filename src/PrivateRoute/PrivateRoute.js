import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let {user, isLoading} = useAuth();

    if(isLoading){
        return <div><iframe src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="380" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/loop-loading-loader-xTk9ZvMnbIiIew7IpW">Loading...</a></p></div>
    }

    return (
      <Route
        {...rest}
        render={({ location }) =>
            user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;