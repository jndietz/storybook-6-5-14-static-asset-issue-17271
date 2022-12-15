import "../assets/fonts.css";
import "../assets/global.css";
import "../assets/test.css";

// export const decorators = [
//   (Story) => (
//     <Theme>
//       <ColorConfig mainColor="rgb(91, 121, 139)" />
//       <Story />
//     </Theme>
//   ),
// ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
