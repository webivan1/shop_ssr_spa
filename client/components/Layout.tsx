import Link from 'next/link'
import Head from 'next/head'
import { FC, ReactNode, useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { CategoriesWrapper } from './Categories/CategoriesWrapper'

type PropTypes = {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
};

const Layout: FC<PropTypes> = ({ children, title, description, keywords }: PropTypes) => {

  const [showMenuCategories, toggleMenuCategories] = useState<boolean>(false);

  const handlerShowMenu = () => toggleMenuCategories(true);
  const handlerHideMenu = () => toggleMenuCategories(false);

  return (
    <div>
      <Head>
        <title>{title ?? ''}</title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Link href="/">
              <Navbar.Brand as="a">
                <span className="text-danger">Just</span>
                <span className="text-primary">Shop</span>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link href="/">
                  <Nav.Link as="a">
                    Home
                  </Nav.Link>
                </Link>
                <Link href="/about">
                  <Nav.Link as="a">
                    About
                  </Nav.Link>
                </Link>
                <Nav.Link as="span" onClick={handlerShowMenu}>
                  Categories
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <CategoriesWrapper
          show={showMenuCategories}
          onHide={handlerHideMenu}
        />
      </header>

      <Container className="pt-5">
        {children}
      </Container>
    </div>
  )
}

export default Layout;