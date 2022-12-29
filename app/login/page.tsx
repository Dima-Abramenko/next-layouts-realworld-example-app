import Link from 'next/link';
import type { FC } from 'react';

// TODO: Complete Login page
const Login: FC = () => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign in</h1>
          <p className="text-xs-center">
            <Link href="/register">Need account?</Link>
          </p>

          <form>
            <fieldset className="form-group">
              <input className="form-control form-control-lg" placeholder="Email" type="text" />
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                placeholder="Password"
                type="password"
              />
            </fieldset>
            <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
