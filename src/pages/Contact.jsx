import { React, useRef } from "react";
import BaseLayout from "../layouts/BaseLayout";
import "../styles/pages/Contact.scss";
import { SlideInFromTop, ZoomOut } from "../utils/Animations/AnimationText";
import emailjs from "@emailjs/browser";
function Contact() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [sujet, setSujet] = useState("");
    // const [message, setMessage] = useState("");
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const Form = e.target;
        // const formData = new FormData(form);
        // const name = formData.get("name");
        // const email = formData.get("email");
        // const sujet = formData.get("sujet");
        // const message = formData.get("message");

        emailjs
            .sendForm(
                "service_z3u39da",
                "template_f55bafo",
                form.current,
                "Z4b6Cf9EcESvpSv28"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        Form.reset();
    };

    return (
        <BaseLayout
            title="Kalène A PIOU: Site Personel"
            description="Mon Portfolio"
        >
            <main className="contact">
                <section className="stack wrapper">
                    <ZoomOut scale={0.8}>
                        <h1>Contactez moi</h1>
                    </ZoomOut>

                    <SlideInFromTop duration={1.5}>
                        <p>
                            Pour toute demande d'information ou de
                            collaboration, n'hésitez pas à me contacter :
                        </p>
                    </SlideInFromTop>
                    <form
                        className="gap-4"
                        method="POST"
                        onSubmit={handleSubmit}
                        ref={form}
                    >
                        <SlideInFromTop duration={1.5} transform={100}>
                            <label for="name">Nom :</label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Nom"
                                controlled="true"
                            />
                        </SlideInFromTop>

                        <SlideInFromTop
                            duration={1.5}
                            delay={0.15}
                            transform={100}
                        >
                            <label for="email">Adresse e-mail :</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Email"
                            />
                        </SlideInFromTop>

                        <SlideInFromTop
                            duration={1.5}
                            delay={0.3}
                            transform={100}
                        >
                            <label for="sujet">Sujet :</label>
                            <input
                                type="text"
                                id="sujet"
                                name="sujet"
                                required
                                placeholder="Sujet"
                            />
                        </SlideInFromTop>

                        <SlideInFromTop
                            duration={1.5}
                            delay={0.45}
                            transform={20}
                        >
                            <label for="message">Message :</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                placeholder="Message"
                            ></textarea>
                        </SlideInFromTop>
                        <ZoomOut scale={0.8} delay={0.6}>
                            <button type="submit">Envoyer</button>
                        </ZoomOut>
                    </form>
                </section>
            </main>
        </BaseLayout>
    );
}

export default Contact;
