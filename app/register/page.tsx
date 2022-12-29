import Link from 'next/link';
import type { FC } from 'react';

// TODO: Complete Register page
const Register: FC = () => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign up</h1>
          <p className="text-xs-center">
            <Link href="/login">Have an account?</Link>
          </p>

          <form>
            <fieldset className="form-group">
              <input className="form-control form-control-lg" placeholder="Your Name" type="text" />
            </fieldset>
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Register;
