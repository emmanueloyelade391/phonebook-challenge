import "./Contact.css";

const Contact = (props) => {
    const { name, phone, email, fruit, photo, } = props;
    return (
        <div className="contact-card">
            <img src={fruit} />
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{email}</p>
            <img src={fruit}/>
        </div>
    );
};

export default Contact;
