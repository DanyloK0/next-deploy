import Header from "../components/header/header"

export default function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Header name='Sydema' role='Amministratore'/>
            {children}
        </section>
    )
}