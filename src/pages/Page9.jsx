import { useEffect, useMemo, useState } from "react";
import "../App.css";
import profile from "../images/profile.png";
import apple from "../images/apple.png";
import orange from "../images/orange.png";
import grape from "../images/grape.png";
import peach from "../images/peach.png";
import blueberry from "../images/blueberry.png";
import man1 from "../images/man-1.jpg";
import man2 from "../images/man-2.jpg";
import man3 from "../images/man-3.jpg";
import man4 from "../images/man-4.jpg";
import man5 from "../images/man-5.jpg";
import man6 from "../images/man-6.jpg";
import man7 from "../images/man-7.jpg";
import woman1 from "../images/woman-1.jpg";
import woman2 from "../images/woman-2.jpg";
import woman3 from "../images/woman-3.jpg";
import woman4 from "../images/woman-4.jpg";
import woman5 from "../images/woman-5.jpg";
import woman6 from "../images/woman-6.jpg";

const FALLBACK_CONTACTS = [
    {
        id: 9,
        name: "Lisa Nguyen",
        phone: "(458) 607-1315",
        email: "lisa.nguyen@gmail.com",
        fruit: grape,
        photo: woman4,
        contactName: "contact-9",
        contactType: "contact-grape"
    }
];

export default function Page9() {
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
        <>
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
            <section className="contacts page-contacts" aria-labelledby="contacts-heading">
                <h2 id="contacts-heading">Contacts</h2>
                <div className="page-contact-container">

                    {FALLBACK_CONTACTS.map((contact) => {
                        return (
                            /*Displays all 10 contact cards*/                            
                            <div className={`contact ${contact.contactName} ${contact.contactType}`}>
                                <img className="fruit-top" src={contact.fruit}></img>
                                <img className="page-contact-photo" src={contact.photo} alt="Image of a brown-skinned man with gold colored eyes and a curly mustache"></img>
                                <p><span className="underlined-text">Name</span>: {contact.name}</p>
                                <p><span className="underlined-text">Phone</span>: {contact.phone}</p>
                                <p><span className="underlined-text">Email</span>: {contact.email}</p>
                                <img className="fruit-bottom" src={contact.fruit}></img>
                            </div>
                        )
                    })}
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
        </>
    );
};