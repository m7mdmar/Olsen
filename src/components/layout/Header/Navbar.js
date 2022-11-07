import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faPinterest, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm border-top border-muted">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Blog Layouts</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Classic Sidebar</a></li>
                                    <li><a class="dropdown-item" href="#">Classic 2 columns</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Categories</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Fashion</a></li>
                                    <li><a class="dropdown-item" href="#">Music</a></li>
                                    <li><a class="dropdown-item" href="#">Looks</a></li>
                                    <li><a class="dropdown-item" href="#">Nature</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Upgrade To Pro</a>
                            </li>
                        </ul>
                        <ul class="d-flex">
                            <li>
                                <a class="dropdown-item p-2" href="#"><FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item p-2" href="#"><FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item p-2" href="#"><FontAwesomeIcon icon={faPinterest} />
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item p-2" href="#"><FontAwesomeIcon icon={faDribbble} />
                                </a>
                            </li>
                            <li class="nav-item dropdown p-2">
                                <a role="button" data-bs-toggle="dropdown" href="#"><FontAwesomeIcon icon={faMagnifyingGlass} />
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <form class="d-flex">
                                            <input class="form-control me-2" type="text" placeholder="Search" />
                                            <button class="btn btn-primary" type="button">Search
                                            </button>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}