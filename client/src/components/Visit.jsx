import React from 'react';

const Visit = () => {
  return (
    <div className="lg:flex lg:flex-row items-center  md:flex-col my-32 gap-20">
      <div>
        <img src="images/visit.jpg" />
      </div>
      <div className="flex items-start justify-center flex-col px-8 py-6">
        <div className='flex flex-col p-0'>
          <h1 className="lg:text-4xl text-3xl font-500 underline">
            Visit our Boutique
          </h1>
          <h1 className="lg:text-4xl text-3xl font-500 underline lg:my-10 my-5">
            Online and In Real Life
          </h1>
        </div>
        <div className="flex flex-col text-gray-500 mt-3">
          <span>We Sell a Range of Sustainable Pre-Owned Fashion,</span>
          <span>
            everyday wear, bridal gowns and evening wear, sarees and clothing
            from a variety of cultures.
          </span>
          <p className="my-8">
            All our profits are reinvested back into our social enterprise,
            supporting women in the local area.
          </p>
        </div>
        <div>
          <h5 className="lg:text-2xl text-[20px] font-normal text-black">
            Our Boutique is open:
          </h5>
          <h4 className="lg:text-2xl text-[20px] font-normal text-black">
            Wednesday – Friday 10am – 4pm
          </h4>
          <p className="lg:text-2xl text-[20px] whitespace-nowrap ">at 90 Coronation Street, Sunderland</p>
        </div>
        <div className="my-7 lg:flex flex lg:flex-row flex-col lg:gap-3 gap-4">
          <button className="bg-black text-white px-2 py-2 rounded">
            Visit Our Boutique
          </button>
          <button className="bg-black text-white px-3 py-2 rounded  whitespace-nowrap">
            Online Shop Coming soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Visit;
