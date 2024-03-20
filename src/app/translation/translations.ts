export const translations: Translation = {
    "ES": {
        "rol.id": "Ingeniero en Sistemas",
        "view.cv.id": "Ver CV",
        "title.id": "¡Hola!",
        "description.id": "Soy Ignacio Gazzia :)",
    },
    "EN": {
        "rol.id": "Systems Engineer",
        "view.cv.id": "View CV",
        "title.id": "¡Hi there!",
        "description.id": "I am Ignacio Gazzia :)",
    }
}

interface Translation {
    [key: string]: {
      [key: string]: string;
    };
  }