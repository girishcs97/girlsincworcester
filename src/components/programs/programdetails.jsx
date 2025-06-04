import React from "react";
import { useParams } from "react-router-dom";
import { programs } from "./programs";


const ProgramDetail = () => {
    const { id } = useParams();
    const program = programs.find((p) => p.id === id);

    if (!program) return <h2 className="text-center py-5">Program not found</h2>;
    return (
        <div className="container-fluid bg-light py-5">
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                        {program.title}
                    </span>
                    <p className="mt-4 fs-5 text-dark" style={{ lineHeight: "1.7" }}>
                        {program.description}
                    </p>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={program.image}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>

            {/* Footer Text */}
            <div className="text-center mt-5 px-4">
                <p className="text-secondary fs-6">
                    {program.description}
                </p>
            </div>
        </div>
    );
};

export default ProgramDetail;
