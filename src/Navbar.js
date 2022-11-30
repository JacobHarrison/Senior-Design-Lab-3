import Home from './Home'
import Max from './Max'
import Thomas from './Thomas'
import Wiley from './Wiley'
import Harrison from './Harrison'
import './Navbar.css';

export default function Navbar() {
    return <nav class="nav">
        <ul class="customUL">
            <CustomLink href="/" class="tab">Home</CustomLink>
            <CustomLink href="/barton" class="tab">Max Barton</CustomLink>
            <CustomLink href="/harrison" class="tab">Jacob Harrison</CustomLink>
            <CustomLink href="/pawlowski" class="tab">Thomas Pawlowski</CustomLink>
            <CustomLink href="/wiley" class="tab">Jacob Wiley</CustomLink>
        </ul>
        <routes class="routes">
            <route path="/" element={<Home />} />
            <route path="Max" element={<Max />} />
            <route path="Thomas" element={<Thomas />} />
            <route path="Harrison" element={<Harrison />} />
            <route path="Wiley" element={<Wiley />} />
            <route path="*" element={<Home />} />
        </routes>
    </nav>
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li class={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}
