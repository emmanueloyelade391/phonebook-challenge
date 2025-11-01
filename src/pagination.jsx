import React, { useState } from "react";
import "./App.css";
import profile from "./images/profile.png";
import apple from "./images/apple.png";
import orange from "./images/orange.png";
import grape from "./images/grape.png";
import peach from "./images/peach.png";
import blueberry from "./images/blueberry.png";
import man1 from "./images/man-1.jpg";
import man2 from "./images/man-2.jpg";
import man3 from "./images/man-3.jpg";
import man4 from "./images/man-4.jpg";
import man5 from "./images/man-5.jpg";
import man6 from "./images/man-6.jpg";
import man7 from "./images/man-7.jpg";
import woman1 from "./images/woman-1.jpg";
import woman2 from "./images/woman-2.jpg";
import woman3 from "./images/woman-3.jpg";
import woman4 from "./images/woman-4.jpg";
import woman5 from "./images/woman-5.jpg";
import woman6 from "./images/woman-6.jpg";

const FALLBACK_CONTACTS = [
  {
    id: 1,
    name: "Zayn Ahmed",
    phone: "(305) 887-2012",
    email: "zayn.ahmed@gmail.com",
    fruit: apple,
    photo: man5,
    contactName: "contact-1",
    contactType: "contact-apple"
  },
  {
    id: 2,
    name: "Ava Smith",
    phone: "(508) 966-7694",
    email: "ava.smith@gmail.com",
    fruit: orange,
    photo: woman1,
    contactName: "contact-2",
    contactType: "contact-orange"
  },
  {
    id: 3,
    name: "Noah Davis",
    phone: "(472) 245-5139",
    email: "noah.davis@gmail.com",
    fruit: grape,
    photo: man3,
    contactName: "contact-3",
    contactType: "contact-grape"
  },
  {
    id: 4,
    name: "Henry Anderson",
    phone: "(630) 674-6725",
    email: "henry.anderson@gmail.com",
    fruit: blueberry,
    photo: man4,
    contactName: "contact-4",
    contactType: "contact-blueberry"
  },
  {
    id: 5,
    name: "Mateo Garcia",
    phone: "(472) 473-8717",
    email: "mateo.garcia@gmail.com",
    fruit: peach,
    photo: man7,
    contactName: "contact-5",
    contactType: "contact-peach"
  },
  {
    id: 6,
    name: "Stacy Moore",
    phone: "(305) 202-0680",
    email: "stacy.moore@gmail.com",
    fruit: orange,
    photo: woman6,
    contactName: "contact-6",
    contactType: "contact-orange"
  },
  {
    id: 7,
    name: "Matthew Young",
    phone: "(447) 279-8889",
    email: "matthew.young@gmail.com",
    fruit: apple,
    photo: man2,
    contactName: "contact-7",
    contactType: "contact-apple"
  },
  {
    id: 8,
    name: "Isabella Morgan",
    phone: "(361) 997-4027",
    email: "isabella.morgan@gmail.com",
    fruit: peach,
    photo: woman2,
    contactName: "contact-8",
    contactType: "contact-peach"
  },
  {
    id: 9,
    name: "Lisa Nguyen",
    phone: "(458) 607-1315",
    email: "lisa.nguyen@gmail.com",
    fruit: grape,
    photo: woman4,
    contactName: "contact-9",
    contactType: "contact-grape"
  },
  {
    id: 10,
    name: "Amanda White",
    phone: "(505) 582-4018",
    email: "amanda.white@gmail.com",
    fruit: blueberry,
    photo: woman5,
    contactName: "contact-10",
    contactType: "contact-blueberry"
  }
];

function Pagination() {
  // Show 1 contact per page
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = FALLBACK_CONTACTS.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(FALLBACK_CONTACTS.length / itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="contacts-container">
        {currentItems.map((contact) => {
          return (
              /*Displays all 10 contact cards*/     
              <>
                <p className="current-contact">Contact {contact.id}</p>
                <div className={`contact ${contact.contactName} ${contact.contactType}`} key={contact.id}>
                  <img className="fruit-top" src={contact.fruit}></img>
                  <img className="contact-photo" src={contact.photo} alt="Image of a brown-skinned man with gold colored eyes and a curly mustache"></img>
                  <p><span className="underlined-text">Name</span>: {contact.name}</p>
                  <p><span className="underlined-text">Phone</span>: {contact.phone}</p>
                  <p><span className="underlined-text">Email</span>: {contact.email}</p>
                  <img className="fruit-bottom" src={contact.fruit}></img>
                </div>
              </>
            )
        })}

      <div className="page-nav">
        {/* This is the previous Button, which takes the user one contact back */}
        <button className="nav-button" onClick={goToPrevious} disabled={currentPage === 1}>
          Previous
        </button>

        {/* These are page number buttons that let the user skip to specific contacts*/}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            disabled={currentPage === index + 1}
            style={{ margin: "5px" }}
            className="nav-button"
          >
            {index + 1}
          </button>
        ))}

        {/* This is the next Button, which takes the user one contact forward */}
        <button className="nav-button" onClick={goToNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;