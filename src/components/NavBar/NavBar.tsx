import { apply, tw } from "@components/util"

const base = {
  header: apply`bg-white dark:bg-gray-800`,
  container: apply`max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8`,
  navLinkContainer: apply`flex items-center gap-1 text-sm`,
  navLink: apply`p-2 text-gray-600 transition hover:text-gray-400 dark:(text-gray-300 hover:text-gray-400)`,
  authLinkContainer: apply`sm:gap-4 sm:flex`,
  authLink: apply`px-5 py-2.5 text-sm font-medium`,
  mobileMenu: apply`p-2 text-gray-600 transition bg-gray-100 dark:(bg-gray-700 text-gray-300) rounded hover:text-gray-400`,
}

type NavLink = {
  href: string
  label: string
}

type Props = {
  links: NavLink[]
  authLinks?: {
    login: NavLink
    register: NavLink
  }
  logo: JSX.Element
  styles?: StyleOverride<typeof base>
}

const NavLinks = ({ links }: Pick<Props, "links">) => (
  <nav className={tw("hidden md:block")} aria-labelledby="header-navigation">
    <h2 className={tw("sr-only")} id="header-navigation">
      Header navigation
    </h2>
    <ul className={tw(base.navLinkContainer)}>
      {links.map(({ label, href }) => (
        <li>
          <a className={tw(base.navLink)} href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

const AuthLinks = ({ login, register }: NonNullable<Props["authLinks"]>) => (
  <div className={tw(base.authLinkContainer)}>
    <a
      className={tw(base.authLink, "text-white bg-gray-700 rounded-md shadow")}
      href={login.href}
    >
      {login.label}
    </a>
    <div className={tw("hidden sm:flex")}>
      <a
        className={tw(
          base.authLink,
          "text-gray-700 bg-gray-100 dark:(bg-gray-700 text-gray-200) rounded-md"
        )}
        href={register.href}
      >
        {register.label}
      </a>
    </div>
  </div>
)

const MobileMenu = () => (
  <button className={tw(base.mobileMenu)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={tw("w-5 h-5")}
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
)

export const NavBar = ({ logo, links, authLinks }: Props) => {
  return (
    <header className={tw(base.header)}>
      <div className={tw(base.container)}>
        <div className={tw("flex items-center justify-between h-16")}>
          <div className={tw("flex-1 md:flex md:items-center md:gap-12")}>
            <a
              className={tw("block text-gray-700 dark:text-gray-200")}
              href="/"
            >
              <span className={tw("sr-only")}>Home</span>
              <svg
                className={tw("h-8")}
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {logo}
              </svg>
            </a>
          </div>

          <div className={tw("md:flex md:items-center md:gap-12")}>
            <NavLinks links={links} />

            <div className={tw("flex items-center gap-4")}>
              {authLinks ? <AuthLinks {...authLinks} /> : <></>}
              <div className={tw("block md:hidden")}>
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
