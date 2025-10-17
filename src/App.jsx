import { useEffect, useMemo, useState } from "react";
import "./App.css";
import profile from "./profile.png";
import apple from "./apple.png";
import orange from "./orange.png";
import grape from "./grape.png";
import peach from "./peach.png";
import blueberry from "./blueberry.png";

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
            <header className="page__header">
                <h1 className="page__title">Personal Contact List</h1>
                <p className="page__subtitle">An online storage for all your personal contacts</p>
            </header>

            <section className="search" aria-labelledby="search-heading">
                <h2 id="search-heading" className="search-heading">Search Contacts</h2>
                <div className="search__controls">
                    <label htmlFor="search-input" className="search-input-label">Search</label>
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Search by name or phone"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        data-testid="search-input"
                    />
                </div>

                <p className="search__results" data-testid="results-count">
                    Showing {contacts.length}{" "}
                    {contacts.length === 1 ? "result" : "results"}
                    {loading ? " (loading...)" : ""}
                    {error ? ` (error: ${error})` : ""}
                </p>
            </section>

            <section className="contacts" aria-labelledby="contacts-heading">
                <h2 id="contacts-heading">Contacts</h2>
                <div className="contacts-container">
                    {/*1st contact*/}
                    <div className="contact contact-apple contact-1">
                        <img className="fruit-top" src={apple}></img>
                        <img className="contact-photo" src={profile} alt="Photo of contact"></img>
                        <p>Name: Joe Schmoe</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: joe.schmoe@gmail.com</p>
                        <img className="fruit-bottom" src={apple}></img>
                    </div>

                    {/*2nd contact*/}
                    <div className="contact contact-orange contact-2">
                        <img className="fruit-top" src={orange}></img>
                        <img className="contact-photo" src={profile} alt="Photo of contact"></img>
                        <p>Name: Joe Schmoe</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: joe.schmoe@gmail.com</p>
                        <img className="fruit-bottom" src={orange}></img>
                    </div>

                    {/*3rd contact*/}
                    <div className="contact contact-grape contact-3">
                        <img className="fruit-top" src={grape}></img>
                        <img className="contact-photo" src={profile} alt="Photo of contact"></img>
                        <p>Name: Joe Schmoe</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: joe.schmoe@gmail.com</p>
                        <img className="fruit-bottom" src={grape}></img>
                    </div>
                    
                    {/*4th contact*/}
                    <div className="contact contact-blueberry contact-4">
                        <img className="fruit-top" src={blueberry}></img>
                        <img className="contact-photo" src={profile} alt="Photo of contact"></img>
                        <p>Name: Joe Schmoe</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: joe.schmoe@gmail.com</p>
                        <img className="fruit-bottom" src={blueberry}></img>
                    </div>

                    {/*5th contact*/}
                    <div className="contact contact-peach contact-5">
                        <img className="fruit-top" src={peach}></img>
                        <img className="contact-photo" src={profile} alt="Photo of contact"></img>
                        <p>Name: Joe Schmoe</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: joe.schmoe@gmail.com</p>
                        <img className="fruit-bottom" src={peach}></img>
                    </div>
                    
                    {/*6th contact*/}
                    <div className="contact contact-orange contact-6">
                        <img className="fruit-top" src={orange}></img>
                        <img className="contact-photo" src={profile} alt="Photo of contact"></img>
                        <p>Name: Joe Schmoe</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: joe.schmoe@gmail.com</p>
                        <img className="fruit-bottom" src={orange}></img>
                    </div>

                    {/*7th contact*/}
                    <div className="contact contact-apple contact-7">
                        <img className="fruit-top" src={apple}></img>
                        <img className="contact-photo" src={profile} alt="Photo of contact"></img>
                        <p>Name: Joe Schmoe</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: joe.schmoe@gmail.com</p>
                        <img className="fruit-bottom" src={apple}></img>
                    </div>

                    {/*8th contact*/}
                    <div className="contact contact-peach contact-8">
                        <img className="fruit-top" src={peach}></img>
                        <img className="contact-photo" src={profile} alt="Photo of contact"></img>
                        <p>Name: Joe Schmoe</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: joe.schmoe@gmail.com</p>
                        <img className="fruit-bottom" src={peach}></img>
                    </div>

                    {/*9th contact*/}
                    <div className="contact contact-grape contact-9">
                        <img className="fruit-top" src={grape}></img>
                        <img className="contact-photo" src={profile} alt="Photo of contact"></img>
                        <p>Name: Joe Schmoe</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: joe.schmoe@gmail.com</p>
                        <img className="fruit-bottom" src={grape}></img>
                    </div>

                    {/*10th contact*/}
                    <div className="contact contact-blueberry contact-10">
                        <img className="fruit-top" src={blueberry}></img>
                        <img className="contact-photo" src={profile} alt="Photo of contact"></img>
                        <p>Name: Joe Schmoe</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: joe.schmoe@gmail.com</p>
                        <img className="fruit-bottom" src={blueberry}></img>
                    </div>
                </div>
            </section>

            <section className="form" aria-labelledby="form-heading">
                <h2 id="form-heading">Add a Contact</h2>
                <form className="form__body" onSubmit={handleSubmit} noValidate>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            minLength={2}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone</label>
                        <input
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
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="form__actions">
                        <button className="btn" type="submit" data-testid="btn-add">
                            Add Contact
                        </button>
                    </div>
                </form>
            </section>

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
