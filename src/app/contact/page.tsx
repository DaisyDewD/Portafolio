import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Share from "@/components/Share";
import nodemailer from "nodemailer";

require("dotenv").config();

const Contact = async () => {
  const data: RegularPage = getListPage("contact/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;
  
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData (e.currentTarget);
    const name= formData.get("name");
    const email= formData.get("email");
    const message= formData.get("message");

    //trasporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      // Envía el correo electrónico
      await transporter.sendMail({
        from: "tuCorreoDestino@gmail.com",
        to: process.env.GMAIL_USER,
        subject: "Nuevo mensaje del formulario de contacto",
        text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
      });

      console.log("Correo electrónico enviado con éxito");
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
    }
  };


  return (
    <>
      <SeoMeta    
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <div className="flex items-center justify-center mt-10">
                  <Share
          className="social-icons"
                   />
                </div>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6 text-dark">
              <form onSubmit={handleFormSubmit} >
                <div className="mb-6">
                  <label htmlFor="name" className="form-label">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Nombre..."
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="form-label">
                    e-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="form-input text-cyan-200"
                    placeholder="mail@email.com"
                    type="email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="Escribe aquí..."
                    rows={8}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar...
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

