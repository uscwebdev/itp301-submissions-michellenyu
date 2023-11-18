import React from 'react';
import { useState } from 'react';
import $ from 'jquery';

export default function MovieSearch() {
  const key = '52a2ed7df566186a6879f195cae8d3fd';
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  function handleFormSubmission(e) {
    e.preventDefault();

    $.ajax({
      url:
        'https://api.themoviedb.org/3/search/movie?api_key=' +
        key +
        '&query=' +
        searchTerm,
      dataType: 'json',
      success: function (response) {
        console.log(response);
        console.log(response.results);
        setResults(response.results);
        setTotalResults(response.total_results);
        //this is like the number of results
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12 mt-4">Movie Search</h1>
      </div>

      <div className="row">
        <form
          className="col-12"
          id="search-form"
          onSubmit={handleFormSubmission}
        >
          <div className="form-row">
            <div className="col-12 mt-4 col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="search-term" className="sr-only">
                Search:
              </label>

              <input
                type="text"
                id="search-term"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
              />
            </div>
            <div className="col-12 mt-4 col-sm-auto">
              <button type="submit" className="btn btn-primary btn-block">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="row">
        <div className="col-12 mt-4 mb-4">
          Showing{' '}
          <span id="num-results" className="font-weight-bold">
            {results.length}
          </span>{' '}
          of{' '}
          <span id="num-total" className="font-weight-bold">
            {totalResults}
          </span>{' '}
          result(s).
        </div>
      </div>

      {results.map((elt) => {
        console.log(elt);
        return (
          <div id="movie-container">
            <img
              alt={elt.title + 'Poster'}
              src={'http://image.tmdb.org/t/p/w500' + elt.poster_path}
            />
            <h5>{elt.title}</h5>
            <div>{elt.release_date}</div>
          </div>
        );
      })}

      {/* <div id="movie-container" className="row">
        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="Dune Poster"
            src="https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
          />
          <h5>Dune</h5>
          <div>2021-09-15</div>
        </div>

        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="Venom: Let There Be Carnage Poster"
            src="https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
          />
          <h5>Venom: Let There Be Carnage</h5>
          <div>2021-09-30</div>
        </div>

        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="Army of Thieves Poster"
            src="https://image.tmdb.org/t/p/w500/iPTZGFmPs7HsXHYxiuxGolihjOH.jpg"
          />
          <h5>Army of Thieves</h5>
          <div>2021-10-29</div>
        </div>

        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="Halloween Kills Poster"
            src="https://image.tmdb.org/t/p/w500/ir9eyz1mtgsohjvo7UYtqUfFuES.jpg"
          />
          <h5>Halloween Kills</h5>
          <div>2021-10-14</div>
        </div>

        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="Free Guy Poster"
            src="https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg"
          />
          <h5>Free Guy</h5>
          <div>2021-08-11</div>
        </div>

        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="F9 Poster"
            src="https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg"
          />
          <h5>F9</h5>
          <div>2021-05-19</div>
        </div>

        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="Hypnotic Poster"
            src="https://image.tmdb.org/t/p/w500/miEj4kNc4efZ5WbPJqWl1UXWrvS.jpg"
          />
          <h5>Hypnotic</h5>
          <div>2021-10-27</div>
        </div>

        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="The Suicide Squad Poster"
            src="https://image.tmdb.org/t/p/w500/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg"
          />
          <h5>The Suicide Squad</h5>
          <div>2021-07-28</div>
        </div>

        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="Old Poster"
            src="https://image.tmdb.org/t/p/w500/vclShucpUmPhdAOmKgf3B3Z4POD.jpg"
          />
          <h5>Old</h5>
          <div>2021-07-21</div>
        </div>

        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="Night Teeth Poster"
            src="https://image.tmdb.org/t/p/w500/4niEFGAUEz3GUqwk9Y2y4aAERhE.jpg"
          />
          <h5>Night Teeth</h5>
          <div>2021-10-20</div>
        </div>

        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="Eternals Poster"
            src="https://image.tmdb.org/t/p/w500/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg"
          />
          <h5>Eternals</h5>
          <div>2021-11-03</div>
        </div>

        <div className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2">
          <img
            alt="No Time to Die Poster"
            src="https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg"
          />
          <h5>No Time to Die</h5>
          <div>2021-09-29</div>
        </div>
    </div> */}
    </div>
  );
}
