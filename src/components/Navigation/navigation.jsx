// import React from "react";
// function Navigation(){
//     return (
//         <div>
//             <ul>
//                 <li><a href="#">Accueil</a></li>
//                 <li><a href="#">Profile</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//         </div>
//     )
// }
// export default Navigation;

import React from "react";
import "./navigation.css"; // Ajoutez des styles si nécessaires

function Navigation() {
  return (
    <nav>
      <ul>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
