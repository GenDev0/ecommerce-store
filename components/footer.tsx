import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='bg-white border-t '>
      <div className='mx-auto py-10 '>
        <p className='text-center text-xs text-black'>
          &copy; 2023 FakeStore - Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
