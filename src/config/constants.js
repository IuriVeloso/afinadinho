import doNote from '../assets/notas/316898__jaz-the-man-2__do.mp3';
import doSustenidoNote from '../assets/notas/316899__jaz-the-man-2__do-stretched.mp3';
// import doOitavoNote from '../assets/notas/316900__jaz-the-man-2__do-stretched-octave.mp3';
import laNote from '../assets/notas/316902__jaz-the-man-2__la.mp3';
import laSustenidoNote from '../assets/notas/316903__jaz-the-man-2__la-stretched.mp3';
import faNote from '../assets/notas/316904__jaz-the-man-2__fa.mp3';
import faSustenidoNote from '../assets/notas/316905__jaz-the-man-2__fa-stretched.mp3';
import miNote from '../assets/notas/316906__jaz-the-man-2__mi.mp3';
// import miSustenidoNote from '../assets/notas/316907__jaz-the-man-2__mi-stretched.mp3';
import reNote from '../assets/notas/316908__jaz-the-man-2__re.mp3';
import reSustenidoNote from '../assets/notas/316909__jaz-the-man-2__re-stretched.mp3';
import siNote from '../assets/notas/316913__jaz-the-man-2__si.mp3';
// import siSustenidoNote from '../assets/notas/316910__jaz-the-man-2__si-stretched.mp3';
import solNote from '../assets/notas/316912__jaz-the-man-2__sol.mp3';
import solSustenidoNote from '../assets/notas/316911__jaz-the-man-2__sol-stretched.mp3';

const constants = {
    "colors": {
        "yellow-2": "#FFFFF0",
        "yellow-1": "#FAFAC9",
        "yellow": "#FADC50",
        "yellow+1": "#A89B63",
        "yellow+2": "#2B280E",
        "orange-2": "#FFF5D2",
        "orange-1": "#FFB375",
        "orange": "#FF9852",
        "orange+1": "#B36A39",
        "orange+2": "#331E10"
    },
    "notas": [
        {"name": 'Do', "file": doNote, "id": 3},
        {"name": 'Do Sustenido', "file": doSustenidoNote, "id": 4},
      //{"name": 'Do Oitava', "file": doOitavoNote}, 
        {"name": 'La', "file": laNote, "id": 2},
        {"name": 'La Sustenido', "file": laSustenidoNote, "id": 12},
        {"name": 'Fa', "file": faNote, "id": 8},
        {"name": 'Fa Sustenido', "file": faSustenidoNote, "id": 9},
        {"name": 'Mi', "file": miNote, "id": 7},
      //{"name": 'Mi Sustenido', "file": miSustenidoNote, "id": 8},
        {"name": 'Re', "file": reNote, "id": 5},
        {"name": 'Re Sustenido', "file": reSustenidoNote, "id": 6},
        {"name": 'Si', "file": siNote, "id": 13},
      //{"name": 'Si Sustenido', "file": siSustenidoNote, "id": 12},
        {"name": 'Sol', "file": solNote, "id": 10},
        {"name": 'Sol Sustenido', "file": solSustenidoNote, "id": 11}
    ]
};

export default constants;