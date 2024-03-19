export const translations: Translation = {
    "ES": {
        "title.id": "¡Hola!",
        "description.id": "Soy Ignacio Gazzia :)",
    },
    "EN": {
        "title.id": "¡Hi there!",
        "description.id": "I am Ignacio Gazzia :)",
    }
}

interface Translation {
    [key: string]: {
      [key: string]: string;
    };
  }