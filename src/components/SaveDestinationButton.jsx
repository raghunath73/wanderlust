import { useState } from "react";
import { Heart } from "lucide-react";

function SaveDestinationButton({ destination }) {
const [savedDestinations, setSavedDestinations] =
useState(() => {
const saved = localStorage.getItem("savedDestinations");


  return saved ? JSON.parse(saved) : [];
});


const isSaved = savedDestinations.some(
(item) => item.id === destination.id
);

function toggleSave() {
let updatedDestinations;


if (isSaved) {
  updatedDestinations = savedDestinations.filter(
    (item) => item.id !== destination.id
  );
} else {
  updatedDestinations = [
    ...savedDestinations,
    destination,
  ];
}

setSavedDestinations(updatedDestinations);

localStorage.setItem(
  "savedDestinations",
  JSON.stringify(updatedDestinations)
);


}

return ( <button
   onClick={toggleSave}
   className="save-button"
   aria-label="Save destination"
 >
<Heart
size={22}
fill={isSaved ? "currentColor" : "none"}
/>

  {isSaved ? "SAVED" : "SAVE DESTINATION"}
</button>


);
}

export default SaveDestinationButton;
