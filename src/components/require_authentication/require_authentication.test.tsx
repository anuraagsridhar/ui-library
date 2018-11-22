
import * as React from 'react';

import { RequireAuthentication } from './require_authentication';

import { configure, mount } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

describe('require authentication', () => {
  it('shows login form when unauthenticated', () => {
    const LoginForm = () => <div>Dummy Login Form</div>;
    const AuthenticatedChild = () => <div>Authenticated Child</div>;
    const wrapper = mount((
      <RequireAuthentication
        isAuthenticated={false}
        LoginForm={LoginForm}
      >
        <AuthenticatedChild />
      </RequireAuthentication>
    ));
    expect(wrapper.contains(<div>Dummy Login Form</div>)).toEqual(true);
    expect(wrapper.contains(<div>Authenticated Child</div>)).toEqual(false);
  });
  it('shows children when authenticated', () => {
    const LoginForm = () => <div>Dummy Login Form</div>;
    const AuthenticatedChild = () => <div>Authenticated Child</div>;
    const wrapper = mount((
      <RequireAuthentication
        isAuthenticated={true}
        LoginForm={LoginForm}
      >
        <AuthenticatedChild />
      </RequireAuthentication>
    ));
    expect(wrapper.contains(<div>Dummy Login Form</div>)).toEqual(false);
    expect(wrapper.contains(<div>Authenticated Child</div>)).toEqual(true);
  });
});
