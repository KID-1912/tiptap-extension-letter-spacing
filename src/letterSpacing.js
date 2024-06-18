import { Extension } from "@tiptap/core";

export default Extension.create({
  name: "letterSpacing",
  addGlobalAttributes() {
    return [
      {
        types: ["paragraph"],
        attributes: {
          letterSpacing: {
            default: null,
            parseHTML: (element) => element.style.letterSpacing,
            renderHTML: (attributes) => {
              if (!attributes.letterSpacing) {
                return {};
              }
              return {
                style: `letter-spacing: ${attributes.letterSpacing}`,
              };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setLetterSpacing:
        (letterSpacing) =>
        ({ commands }) => {
          return commands.updateAttributes("paragraph", {
            letterSpacing,
          });
        },
    };
  },
});
