'use client';
import type { ReactElement } from 'react';

// TODO: Complete SettingsForm component
export const SettingsForm = (): ReactElement => (
  <>
    <form>
      <fieldset>
        <fieldset className="form-group">
          <input className="form-control" placeholder="URL of profile picture" type="text" />
        </fieldset>
        <fieldset className="form-group">
          <input className="form-control form-control-lg" placeholder="Your Name" type="text" />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control form-control-lg"
            placeholder="Short bio about you"
            rows={8}
          ></textarea>
        </fieldset>
        <fieldset className="form-group">
          <input className="form-control" placeholder="Email" type="text" />
        </fieldset>
        <fieldset className="form-group">
          <input className="form-control" placeholder="Password" type="password" />
        </fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
          Update Settings
        </button>
      </fieldset>
    </form>
    <hr />
    <button className="btn btn-outline-danger" type="button">
      Or click here to logout.
    </button>
  </>
);
