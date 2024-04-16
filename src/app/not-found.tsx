import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";
import "@/styles/notfound.scss";

const NotFound = () => {
  return (
    <>
      <SeoMeta title={"Page Not Found"} />
      <section className="section-sm text-center">
        <div className="container">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-6">
              <img src="/images/404.png" alt="Page not found" className={`${['not-found-image']} mb-4`} />
              <h1 className="h2 mb-4">Página no encontrada</h1>
              <div className="content">
                <p>
                <strong>¡Ups!</strong> Esta sección está bajo remodelación. Estoy creando algo épico. Mientras tanto, descubre otros proyectos en mi portafolio
                </p>
              </div>
              <Link href="/" className="btn btn-primary mt-8">
                Proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
