import Main from "./(Home)/(Main)/Main";
import Footer from "./(Home)/(Footer)/Footer";
import "./global.css";
import Banner from "./(Home)/(Header)/banner/page";
import Menu from "./(Home)/(Header)/menu/page";

export default function Rootlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <div>
            <Banner />
            <Menu />
            <Main>{children}</Main>
            <Footer />
          </div>
      </body>
    </html>
  );
}
