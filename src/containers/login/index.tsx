import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from './../../store/store'

import { LoginAction } from '../../store/userStore/user.actions.async';
import { ILoginDispatchProps, ILoginProps, ILoginStateProps } from './types';
import RootState from '../../store/types';

import './styles.css';

const Login = ({dispatchLoginAction, errorMessage, loading}: ILoginProps) => {

  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleOnClick = (): void => {
    dispatchLoginAction(username, password);
  };

  return (
    <div className="container">
      <div>
        <p>Username</p>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>{loading && <div>Loading ...</div>}</div>
      <div>{errorMessage}</div>
      <div>
        <input type="button" value="login" onClick={handleOnClick} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState): ILoginStateProps => {
  return {
    errorMessage: state.user.errorMessage,
    loading: state.user.loading,
  };
};

const mapDispatchToProps = (): ILoginDispatchProps => {
  return {
    dispatchLoginAction: (username: string, password: string) => {
      return dispatch(LoginAction({username, password}));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
