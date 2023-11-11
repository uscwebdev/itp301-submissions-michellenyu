import React from 'react';
import { useState } from 'react';

export default function Form() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailing, setEmailing] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [fullNameError, setFullNameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();
  const [emailingPhoneError, setEmailingPhoneError] = useState();
  const [commentsError, setCommentsError] = useState();
  const [termsAcceptedError, setTermsAcceptedError] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted');

    var foundError = false;

    if (!fullName.trim()) {
      foundError = true;
      setFullnameError('Name cannot be empty.');
    } else if (!/\s/.test(fullName)) {
      foundError = true;
      setFullnameError('Must be a full name (have a space between words).');
    } else {
      setFullNameError('');
    }

    if (!password.trim()) {
      foundError = true;
      setPasswordError('Password cannot be empty.');
    } else if (password.length < 5) {
      foundError = true;
      setPasswordError('Password must contain at least 5 characters.');
    } else if (!password.includes(/[a-z]/) || !password.includes(/[A-Z]/)) {
      foundError = true;
      setPasswordError(
        'Password must contain uppercase and lowercase characters.'
      );
    }

    if (confirmPassword !== password) {
      foundError = true;
      setConfirmPasswordError('Passwords do not match.');
    }

    if (!(emailing && !phone)) {
      foundError = true;
      setEmailingPhoneError('You must provide either email or phone.');
    }

    if (comments.length > 100) {
      foundError = true;
      setCommentsError('Comments cannot exceed 100 characters.');
    }

    if (!termsAccepted) {
      foundError = true;
      setTermsAcceptedError('You must accept Terms & Conditions.');
    }

    // If there are errors, return without further processing
    if (foundError == true) {
      e.preventDefault();
    } else {
      alert('Registration Successful.');
    }

    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-12">
            <form>
              <div className="my-3 row">
                <label htmlFor="full-name" className="col-sm-2 col-form-label">
                  Full Name: <span className="text-danger">*</span>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tommy Trojan"
                    id="full-name"
                  />
                </div>
              </div>

              <div className="my-3 row">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                  Password: <span className="text-danger">*</span>
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
              </div>

              <div className="my-3 row">
                <label
                  htmlFor="password-confirm"
                  className="col-sm-2 col-form-label"
                >
                  Confirm Password: <span className="text-danger">*</span>
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="password-confirm"
                  />
                </div>
              </div>

              <div className="my-3 row">
                <label className="col-sm-2 col-form-label">
                  Provide One: <span className="text-danger">*</span>
                </label>
                <div className="col-10">
                  <div className="row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                      Email:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ttrojan@usc.edu"
                        id="email"
                      />
                    </div>

                    <label
                      htmlFor="phone"
                      className="mt-sm-2 col-sm-2 col-form-label"
                    >
                      Phone:
                    </label>
                    <div className="mt-sm-2 col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="(123) 456-7890"
                        id="phone"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-3 row">
                <label htmlFor="comment" className="col-sm-2 col-form-label">
                  Comments:
                </label>
                <div className="col-sm-10">
                  <textarea className="form-control" id="comment"></textarea>

                  <small id="comment-count" className="form-text text-right">
                    0 / 100
                  </small>
                </div>
              </div>

              <div className="my-3 row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                    />
                    <label className="form-check-label" htmlFor="terms">
                      I accept Terms & Conditions.
                      <span className="text-danger">*</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="my-3 row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
