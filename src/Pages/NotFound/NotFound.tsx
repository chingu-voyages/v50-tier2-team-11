import React, { Fragment } from "react";
import { ReactComponent as NotFoundSVG } from '../.././assets/NotFound.svg';
import { ReactComponent as Spoon } from '../.././assets/spoon.svg';
const NotFound = () => {
    return (
      <Fragment>
        <div className="overflow-hidden h-screen w-screen flex items-center justify-center mx-0 ">
          <div className="flex flex-col items-center justify-center">
            <NotFoundSVG width={400} />
            <div className="flex items-center">
              <p className="lg:text-3xl text-2xl">
                Oh, <span className="uppercase">no</span>
              </p>
              <Spoon width={50} className="inline-block mx-0 px-0"/>
            </div>
            <p className="text-2xl">Something Went Wrong</p>
            <button className="mt-10 p-2 border border-black rounded">Back to HomePage</button>
          </div>
          
        </div>
      </Fragment>
      //<Footer/>
    );
  };

export default NotFound;
