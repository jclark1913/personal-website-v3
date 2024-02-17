import React from "react";

const ContactSection = () => {
  return (
    <div id="contact" className="mt-24">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Contact
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-left text-md sm:text-lg">Let's Connect</h2>
          <p>
            I'm currently looking for new opportunities and open to new roles.
            My inbox is open - send me a message if you'd like to ask a question,
            connect or get in touch for any reason.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
