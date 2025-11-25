import styles from "./Navbar.module.css";
import { House } from 'lucide-react';
function Navbar2() {

  return (
    <nav className={styles.nav}>
     <p> Isaac Santos</p>
     <ul>
        <li><House /> Home </li>
        <li>  About me</li>
        <li>  Projects</li>
        <li> Contact </li>
     </ul>
    </nav>
  );
}

export default Navbar2;