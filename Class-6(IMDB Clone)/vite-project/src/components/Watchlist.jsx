import React, { useEffect } from "react";

function Watchlist({ watchlist }) {


  return (
    <>
      {/* Genre Based Filtering */}

      {/* Search Field */}

      {/* Watchlist Table */}

      <div className="m-8">
        <table className="w-full text-center ">
          <thead className="border border-gray-200 rounded-lg bg-gray-200">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Delete Movies</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.map((movieObj) => {
              return (
                <tr className="border-b-2">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem] w-[10rem]"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                    />
                    <div className="mx-10">{movieObj.title}</div>
                  </td>

                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>Action</td>

                  <td className="text-red-500">Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
