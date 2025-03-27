import React from 'react'

function Watchlist() {
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
          <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/gFFqWsjLjRfipKzlzaYPD097FNC.jpg`}
                      />
                      <div className="mx-10">Flight Risk</div>
                    </td>

                    <td>7.5</td>
                    <td>600</td>
                    <td>Action</td>

                    <td className="text-red-500">Delete</td>
                  </tr>

                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/gFFqWsjLjRfipKzlzaYPD097FNC.jpg`}
                      />
                      <div className="mx-10">Flight Risk</div>
                    </td>

                    <td>7.5</td>
                    <td>600</td>
                    <td>Action</td>

                    <td className="text-red-500">Delete</td>
                  </tr>
          </tbody>
        </table>
      </div>
   
   
   </>
  )
}

export default Watchlist