const Footer = () => {
  return (
    <div className="bg-black w-screen h-[60vh] text-white flex items-center  flex-col px-52 py-32">
      <div className='flex items-center justify-between flex-col gap-15'>
        <div>
          <img
            src="images/White-LOGO-small-300x114.png"
            alt=""
            className="text-white"
          />
        </div>
        <div>
          <h1 className='text-2xl'>Our Boutique is open: Wednesday – Friday 10am – 4pm</h1>
        </div>
        <div className='flex items-center justify-between gap-10'>
          <div className='flex flex-col gap-4 items-center'>
            <h4>About</h4>
            <p className='w-[30%] text-center text-[14px]'>
              Women’s Community Boutique CIC Limited by Guarantee Registered No:
              14428601 Registered in England
            </p>
            <a className='underline text-[14px]'>Privcy policy</a>
          </div>
          <div className='flex items-center flex-col gap-3 text-[14px]'>
            <h4>Social</h4>
            <a href="#" className='underline'>Facebook</a>
            <a href="#"className='underline'>Instagram</a>
            <a href="#"className='underline'>Linkedin</a>
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <h4>Contact</h4>
            <p className='w-[30%] text-center text-[14px]'>
              90 Coronation Street, Sunderland SR1 2HE poppy@wcb.org.uk Tel:
              07716737812
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
