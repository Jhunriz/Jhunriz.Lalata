import Introduction from "../Pages/Introduction";
import Skills from "../Pages/Skills";

const Section = () => {
    const pages = [
        { page: Introduction },
        { page: Skills }
    ];

    return (
        <div className="flex flex-col w-full lg:pt-0">
            {pages.map((page, index) => (
                <section
                    className={`h-auto flex items-center lg:px-24 py-24 justify-center ${
                        index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-100 dark:bg-black'
                    }`}
                    key={index}
                >
                    <page.page />
                </section>
            ))}
        </div>
    );
};

export default Section;
