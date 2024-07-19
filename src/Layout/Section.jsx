import Introduction from "../Pages/Introduction";
import Skills from "../Pages/Skills"

const Section = () => {
    const pages = [
        { page: Introduction },
        { page: Skills }
    ];

    return (
        <div>
            {pages.map((page, index) => (
                <section className="h-screen" key={index}>
                    <page.page />
                </section>
            ))}
        </div>
    );
};

export default Section;
