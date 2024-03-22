export const translations: Translation = {
    "ES": {
        "rol.id": "Ingeniero en Sistemas",
        "view.cv.id": "Ver CV",
        "title.id": "¡Hola!",
        "cv.url": "https://drive.google.com/file/d/1WXdiFy5OhWwS-gbjWba_jGqJUfjbcfDT/view?usp=sharing",
        "description.id": "Soy Ignacio Gazzia :)",
    },
    "EN": {
        "rol.id": "Systems Engineer",
        "view.cv.id": "View CV",
        "title.id": "¡Hi there!",
        "cv.url": "https://drive.google.com/file/d/1dbBhGfsEpyLOjZ6OhlG5pOWe6JUbD8P3/view?usp=sharing",
        "description.id": "I am Ignacio Gazzia :)",
    }
}

interface Translation {
    [key: string]: {
      [key: string]: string;
    };
  }