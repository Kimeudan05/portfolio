import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import WhatsappContact from "../api/Whatsapp.tsx"; // Adjust the import path if necessary

interface WhatsappButtonProps {
  message: string;
  phoneNumber: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ message, phoneNumber }) => {
  return (
    <WhatsappContact message={message} number={phoneNumber}>
      <FontAwesomeIcon icon={faWhatsapp} style={{ width: "50px", fontSize: "3rem" }} />
    </WhatsappContact>
  );
};

export default WhatsappButton;
