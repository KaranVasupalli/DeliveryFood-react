import React from 'react';

const Footer = () => (
    <>
        <footer className=' bg-slate-900 text-white py-3 mt-6'>
            <div className=' flex  justify-around'>
                <div className=' flex flex-col gap-2'>
                    <h2 className=' text-2xl'>Company</h2>
                    <div className=' flex flex-col gap-1 cursor-pointer'>
                        <p>About us</p>
                        <p>Team</p>
                        <p>careers</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div className=' flex flex-col gap-2'>
                    <h2 className='text-2xl'>Legal</h2>
                    <div className=' flex flex-col gap-1 cursor-pointer'>
                        <p>Terms & conditions</p>
                        <p>Refund & Cancellation</p>
                        <p>Privacy policy</p>
                        <p>Cookie policy</p>
                    </div>
                </div>
                <div className=' flex flex-col gap-2'>
                    <h2 className='text-2xl'>Follow us</h2>
                    <div className=' flex flex-col gap-1 cursor-pointer'>
                        <p>Recieve exclusive offers in your mailbox</p>
                        <div className=' flex gap-3'>
                            <input type="text" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
)

export default Footer;
