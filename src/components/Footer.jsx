

const FooterElement = ({heading, list}) => {

    return(
        <>
            <div>
                <h2 className="text-bold mb-2">{heading}</h2>
                <div className="flex flex-col">
                    {
                        list.map(
                            (element) => (
                                <h3>
                                    {element}
                                </h3>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}


const Footer = () => {
    return (
        <>
            <footer className="w-full border-t-[1px] border-mix xl:px-side-spacing py-12">
                <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-5 gap-2">
                    <FooterElement heading="Heading 1" list={["Test", "Test2"]}/> 
                    <FooterElement heading="Heading 2" list={["Noch", "Einer"]}/> 
                    <FooterElement heading="Heading 3" list={["Was", "Anderes"]}/> 
                    <FooterElement heading="Heading 4" list={["Aber", "Nicht"]}/> 
                    <FooterElement heading="Heading 5" list={["Dich", "Für"]}/> 
                </div>
            </footer>
        </>
    )
}

export default Footer;