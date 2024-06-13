import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);

  const fetchFoods = async () => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'e3f5e175admsh8192bbca90d5001p16f92bjsn80d8d27d5dca',
        'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch('https://chinese-food-db.p.rapidapi.com/', options);
      const result = await response.json();
      console.log(result);

      // Assuming the data is directly within an array at the root of the response
      if (Array.isArray(result)) {
        setData(result);
      } else {
        console.error('Unexpected response structure:', result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []); // Empty dependency array ensures this runs only once

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowCart(e.target.value.length > 0);
  };

  // Filter data based on search query
  const filteredData = data.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="text-center text-3xl mt-8">Order Something</h1>
      <div className="text-center mt-6">
        <input
          type="text"
          placeholder="Find food"
          className="border border-blue-200 w-[400px] h-12 px-4 text-2xl"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="text-center mt-4"></div>
      <div className='flex justify-around mt-6'>
        <h1>Popular Foods</h1>
        <div>
          <button className='border border-blue-300 w-36' onClick={() => setIsOpen(!isOpen)}>Most Relevant</button>
          {isOpen && (
            <div className='flex flex-col gap-2 border border-blue-300'>
              <p>Most Relevant</p>
              <p>Price Low To High</p>
              <p>Price High to Low</p>
              <p>Rating High To Low</p>
              <p>Rating Low To High</p>
            </div>
          )}
        </div>
      </div>

      <div className='flex flex-wrap gap-4 justify-center items-end text-white text-xl mt-9'>
        {filteredData.length > 0 ? (
          filteredData.map((post) => {
            const { id, image, title } = post;
            return (
              <div key={id} className="w-[400px] bg-slate-500 items-baseline">
                <img src={image} alt={title} />
                <h1>{title}</h1>
                <div className='flex justify-between'>
                  <button className='px-4 py-2 bg-slate-500 rounded-md'>Add To Cart</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No data available</p>
        )}
      </div>

      {showCart && (
        <div className='fixed bottom-0 left-0 w-full p-4 bg-gray-800 text-white'>
          <div className='flex justify-between items-center'>
            <h2>Your Cart</h2>
            <button onClick={() => setShowCart(false)}>Close</button>
          </div>
          {/* Cart items will be listed here */}
          <div>
            <p>Your cart is empty.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
