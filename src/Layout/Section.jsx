
import Introduction from "../Pages/Introduction";
import Skills from "../Pages/Skills";

const Section = () => {
    const pages = [
        { page: Introduction },
        { page: Skills }
    ];

    return (
        <div className="flex flex-col py-24 lg:pt-0">
            {pages.map((page, index) => (
                <section className="h-screen p-4 flex items-center justify-center" key={index}>
                    <page.page />
                </section>
            ))}
        </div>
    );
};

export default Section;
