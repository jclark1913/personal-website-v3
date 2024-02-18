import React from "react";

const ContactSection = () => {
  return (
    <div id="contact" className="my-24">
      <h1 className="text-4xl font-bold text-headertext mb-4 text-center">
        Contact
      </h1>
      <div className="grid grid-cols-2 gap-8 text-paragraphtext">
        <div className="flex flex-col gap-4">
          <h2 className="text-left text-md sm:text-lg">Let's Connect</h2>
          <p className="">
            I'm currently looking for new opportunities and open to new roles.
            My inbox is open - send me a message if you'd like to ask a
            question, connect or get in touch for any reason.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-left text-md sm:text-lg">
            This is here to take up space
          </h2>
          <p className="">Dont know what will go here honestly</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
