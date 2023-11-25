

const FooterElement = ({heading, list}) => {

    return(
        <>
            <div className="max-w-[20rem]">
                <h2 className="mb-8 text-sm font-semibold text-tx_dark uppercase">
                    {heading}
                </h2>
                <ul className="flex flex-col text-gray-600 font-medium pr-28 gap-3">
                    {
                        list.map(
                            (element) => (
                                <li className="">
                                    <a href="/" className="hover:underline">{element}</a>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </>
    )
}


const Footer = () => {
    return (
        <>
            <footer className="w-full border-t-[1px] border-mix py-12 px-side-spacing-sm xl:px-side-spacing">
                <div className="flex justify-between">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <FooterElement heading="Heading 1" list={["Test", "Test2"]}/> 
                        <FooterElement heading="Heading 2" list={["Noch", "Einer"]}/> 
                        <FooterElement heading="Heading 3" list={["Was", "Anderes"]}/> 
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;