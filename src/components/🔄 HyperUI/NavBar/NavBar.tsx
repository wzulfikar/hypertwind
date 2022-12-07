import { cx } from "@twind/core";

const base = {
  header: `bg-white dark:bg-gray-800`,
  container: `max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8`,
  navLinkContainer: `flex items-center gap-1 text-sm`,
  navLink: `p-2 text-gray-600 transition hover:text-gray-400 dark:(text-gray-300 hover:text-gray-400)`,
  authLinkContainer: `sm:gap-4 sm:flex`,
  authLink: `px-5 py-2.5 text-sm font-medium`,
  mobileMenu: `p-2 text-gray-600 transition bg-gray-100 dark:(bg-gray-700 text-gray-300) rounded hover:text-gray-400`,
};

type NavLink = {
  href: string;
  label: string;
};

type Props = {
  links: NavLink[];
  authLinks?: {
    login: NavLink;
    register: NavLink;
  };
  logo: JSX.Element;
  styles?: StyleOverride<typeof base>;
};

const NavLinks = ({ links }: Pick<Props, "links">) => (
  <nav className={"hidden md:block"} aria-labelledby="header-navigation">
    <h2 className={"sr-only"} id="header-navigation">
      Header navigation
    </h2>
    <ul className={base.navLinkContainer}>
      {links.map(({ label, href }) => (
        <li key={label}>
          <a className={base.navLink} href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const AuthLinks = ({ login, register }: NonNullable<Props["authLinks"]>) => (
  <div className={base.authLinkContainer}>
    <a
      className={cx(base.authLink, "text-white bg-gray-700 rounded-md shadow")}
      href={login.href}
    >
      {login.label}
    </a>
    <div className={"hidden sm:flex"}>
      <a
        className={cx(
          base.authLink,
          "text-gray-700 bg-gray-100 dark:(bg-gray-700 text-gray-200) rounded-md"
        )}
        href={register.href}
      >
        {register.label}
      </a>
    </div>
  </div>
);

const MobileMenu = () => (
  <button className={base.mobileMenu}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={"w-5 h-5"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
);

export const NavBar = ({ logo, links, authLinks }: Props) => {
  return (
    <header className={base.header}>
      <div className={base.container}>
        <div className={"flex items-center justify-between h-16"}>
          <div className={"flex-1 md:flex md:items-center md:gap-12"}>
            <a className={"block text-gray-700 dark:text-gray-200"} href="/">
              <span className={"sr-only"}>Home</span>
              <svg
                className={"h-8"}
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {logo}
              </svg>
            </a>
          </div>

          <div className={"md:flex md:items-center md:gap-12"}>
            <NavLinks links={links} />

            <div className={"flex items-center gap-4"}>
              {authLinks ? <AuthLinks {...authLinks} /> : <></>}
              <div className={"block md:hidden"}>
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
