import React, { ReactElement } from "react";

const URL = "https://wa.me";

interface WhatsappProps {
  number: string;
  message: string;
  children: ReactElement;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const WhatsappContact = ({ number, message, children, onClick }: WhatsappProps) => {
  // Clean up the phone number by removing non-alphanumeric characters and spaces
  const sanitizedNumber = number?.replace(/[^\w\s]/gi, "").replace(/ /g, "");

  // Construct the WhatsApp URL
  let url = `${URL}/${sanitizedNumber}`;
  if (message) {
    url += `?text=${encodeURIComponent(message)}`; // Use encodeURIComponent to safely encode the message
  }

  return (
    <button className="btn btn-success whatsapp"
      onClick={(e) => {
        window.open(url, "_blank"); // Open in a new tab
        if (onClick) {
          onClick(e); // Trigger the onClick event if provided
        }
      }}
    >
      {children}
    </button>
  );
};

export default WhatsappContact;
