import { useEffect, useMemo, useState } from "react";
import "./App.css";
import profile from "./profile.png";
import apple from "./apple.png";
import orange from "./orange.png";
import grape from "./grape.png";
import peach from "./peach.png";
import blueberry from "./blueberry.png";
import man1 from "./man-1.jpg";
import man2 from "./man-2.jpg";
import man3 from "./man-3.jpg";
import man4 from "./man-4.jpg";
import man5 from "./man-5.jpg";
import man6 from "./man-6.jpg";
import man7 from "./man-7.jpg";
import woman1 from "./woman-1.jpg";
import woman2 from "./woman-2.jpg";
import woman3 from "./woman-3.jpg";
import woman4 from "./woman-4.jpg";
import woman5 from "./woman-5.jpg";
import woman6 from "./woman-6.jpg";

const FALLBACK_CONTACTS = [
    {
        id: 1,
        name: "Ada Lovelace",
        phone: "(555) 010-0101",
        email: "ada@example.com",
    },
    {
        id: 2,
        name: "Alan Turing",
        phone: "(555) 010-0102",
        email: "alan@example.com",
    },
    {
        id: 3,
        name: "Grace Hopper",
        phone: "(555) 010-0103",
        email: "grace@example.com",
    },
];

const App = () => {
    const [contacts, setContacts] = useState(FALLBACK_CONTACTS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {}, []);

    const [query, setQuery] = useState("");

    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    function handleSubmit(e) {
        e.preventDefault();
        // Add contact submission logic here
    }

    return (
        <main className="page" data-testid="page-root">
            {/*This section contains the title and main subtitle of this entire website*/}
            <header className="page__header">
                <h1 className="page__title">Personal Contact List</h1>
                <p className="page__subtitle">An online storage for all your personal contacts</p>
            </header>

            {/*This section lets users search for specific contacts by inputting names or numbers 
            in the search box. At the moment it is not functional*/}
            <section className="search" aria-labelledby="search-heading">
                <h2 id="search-heading" className="search-heading">Search Contacts</h2>
                <div className="search__controls">
                    <label htmlFor="search-input" className="search-input-label">Search</label>
                    <input
                        className="input-element"
                        id="search-input"
                        type="search"
                        placeholder="Search by name or phone"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        data-testid="search-input"
                        size="23"
                    />
                </div>

                {/*Shows how many contacts were found that match the user's inputted name or number*/}
                <p className="search__results" data-testid="results-count">
                    Showing {contacts.length}{" "}
                    {contacts.length === 1 ? "result" : "results"}
                    {loading ? " (loading...)" : ""}
                    {error ? ` (error: ${error})` : ""}
                </p>
            </section>

            {/*This section contains all contact cards in order (each row has 3 cards).
            Each contact card has a unique name, email, phone number, and photo*/}
            <section className="contacts" aria-labelledby="contacts-heading">
                <h2 id="contacts-heading">Contacts</h2>
                <div className="contacts-container">
                    {/*1st contact*/}
                    <div className="contact contact-apple contact-1">
                        <img className="fruit-top" src={apple}></img>
                        <img className="contact-photo" src={man5} alt="Image of a brown-skinned man with gold colored eyes and a curly mustache"></img>
                        <p><span className="underlined-text">Name</span>: Zayn Ahmed</p>
                        <p><span className="underlined-text">Phone</span>: (305) 887-2012</p>
                        <p><span className="underlined-text">Email</span>: zayn.ahmed@gmail.com</p>
                        <img className="fruit-bottom" src={apple}></img>
                    </div>

                    {/*2nd contact*/}
                    <div className="contact contact-orange contact-2">
                        <img className="fruit-top" src={orange}></img>
                        <img className="contact-photo" src={woman1} alt="Image of an African-American woman with calm eyes"></img>
                        <p><span className="underlined-text">Name</span>: Ava Smith</p>
                        <p><span className="underlined-text">Phone</span>: (508) 966-7694</p>
                        <p><span className="underlined-text">Email</span>: ava.smith@gmail.com</p>
                        <img className="fruit-bottom" src={orange}></img>
                    </div>

                    {/*3rd contact*/}
                    <div className="contact contact-grape contact-3">
                        <img className="fruit-top" src={grape}></img>
                        <img className="contact-photo" src={man3} alt="Image of a brown-skinned with a wide smile"></img>
                        <p><span className="underlined-text">Name</span>: Noah Davis</p>
                        <p><span className="underlined-text">Phone</span>: (472) 245-5139</p>
                        <p><span className="underlined-text">Email</span>: noah.davis@gmail.com</p>
                        <img className="fruit-bottom" src={grape}></img>
                    </div>
                    
                    {/*4th contact*/}
                    <div className="contact contact-blueberry contact-4">
                        <img className="fruit-top" src={blueberry}></img>
                        <img className="contact-photo" src={man4} alt="Image of a caucasian man wearing glasses and smiling"></img>
                        <p><span className="underlined-text">Name</span>: Henry Anderson</p>
                        <p><span className="underlined-text">Phone</span>: (630) 674 6725</p>
                        <p><span className="underlined-text">Email</span>: henry.anderson@gmail.com</p>
                        <img className="fruit-bottom" src={blueberry}></img>
                    </div>

                    {/*5th contact*/}
                    <div className="contact contact-peach contact-5">
                        <img className="fruit-top" src={peach}></img>
                        <img className="contact-photo" src={man7} alt="Image of a brown-skinned man with a small grin"></img>
                        <p><span className="underlined-text">Name</span>: Mateo Garcia</p>
                        <p><span className="underlined-text">Phone</span>: (472) 473-8717</p>
                        <p><span className="underlined-text">Email</span>: mateo.garcia@gmail.com</p>
                        <img className="fruit-bottom" src={peach}></img>
                    </div>
                    
                    {/*6th contact*/}
                    <div className="contact contact-orange contact-6">
                        <img className="fruit-top" src={orange}></img>
                        <img className="contact-photo" src={woman6} alt="Image of a woman with a piercing gaze wearing a hat"></img>
                        <p><span className="underlined-text">Name</span>: Stacy Moore</p>
                        <p><span className="underlined-text">Phone</span>: (305) 202-0680</p>
                        <p><span className="underlined-text">Email</span>: stacy.moore@gmail.com</p>
                        <img className="fruit-bottom" src={orange}></img>
                    </div>

                    {/*7th contact*/}
                    <div className="contact contact-apple contact-7">
                        <img className="fruit-top" src={apple}></img>
                        <img className="contact-photo" src={man2} alt="Image of a caucasian man with hazel colored eyes staring blankly"></img>
                        <p><span className="underlined-text">Name</span>: Matthew Young</p>
                        <p><span className="underlined-text">Phone</span>: (447) 279-8889</p>
                        <p><span className="underlined-text">Email</span>: matthew.young@gmail.com</p>
                        <img className="fruit-bottom" src={apple}></img>
                    </div>

                    {/*8th contact*/}
                    <div className="contact contact-peach contact-8">
                        <img className="fruit-top" src={peach}></img>
                        <img className="contact-photo" src={woman2} alt="Image of a woman wearing a hijab smiling to her side"></img>
                        <p><span className="underlined-text">Name</span>: Isabella Morgan</p>
                        <p><span className="underlined-text">Phone</span>: (361) 997-4027</p>
                        <p><span className="underlined-text">Email</span>: isabella.morgan@gmail.com</p>
                        <img className="fruit-bottom" src={peach}></img>
                    </div>

                    {/*9th contact*/}
                    <div className="contact contact-grape contact-9">
                        <img className="fruit-top" src={grape}></img>
                        <img className="contact-photo" src={woman4} alt="Image of an asian woman with freckles smiling to her left side"></img>
                        <p><span className="underlined-text">Name</span>: Lisa Nguyen</p>
                        <p><span className="underlined-text">Phone</span>: (458) 607-1315</p>
                        <p><span className="underlined-text">Email</span>: lisa.nguyen@gmail.com</p>
                        <img className="fruit-bottom" src={grape}></img>
                    </div>

                    {/*10th contact*/}
                    <div className="contact contact-blueberry contact-10">
                        <img className="fruit-top" src={blueberry}></img>
                        <img className="contact-photo" src={woman5} alt="Image of an African-American woman smiling slightly to her left side"></img>
                        <p><span className="underlined-text">Name</span>: Amanda White</p>
                        <p><span className="underlined-text">Phone</span>: (505) 582-4018</p>
                        <p><span className="underlined-text">Email</span>: amanda.white@gmail.com</p>
                        <img className="fruit-bottom" src={blueberry}></img>
                    </div>
                </div>
            </section>

            {/*This section allows the user to add new contacts by adding a new name, phone number, and email address. 
            It is not functional at the moment, however it is responsive to different page size*/}
            <section className="form" aria-labelledby="form-heading">
                <h2 id="form-heading">Add a New Contact</h2>
                <form className="form__body" onSubmit={handleSubmit} noValidate>
                    {/*Lets the user add the name of the new contact.*/}
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            className="input-element"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            minLength={2}
                            placeholder="e.g. Joe Schmo"
                        />
                    </div>
                    {/*Lets the user add the phone number of the new contact.*/}
                    <div className="field">
                        <label htmlFor="phone">Phone</label>
                        <input
                            className="input-element"
                            id="phone"
                            name="phone"
                            inputMode="tel"
                            placeholder="(555) 555-5555"
                            value={form.phone}
                            onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                            }
                            required
                        />
                    </div>
                    {/*Lets the user add the email of the new contact. The user must push the "Add contact" button next to the 
                    email input to create the new contact with the information they have added.*/}
                    <div className="email-wrapper">
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                className="input-element"
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                placeholder="jschmo@gmail.com"
                            />
                        </div>
                        <div className="form__actions">
                            <button className="btn" type="submit" data-testid="btn-add">
                                Add Contact
                            </button>
                        </div>
                    </div>
                </form>
            </section>

            {/*This footer came with the scaffolding of this project*/}
            <footer className="page__footer">
                <small>
                    Starter provided. Complete tasks per README and make this page
                    shine.
                </small>
            </footer>
        </main>
    );
};

export default App;
