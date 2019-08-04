import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
class Button extends React.Component {
  static contextType = LanguageContext;

  renderButton(color, language) {
    return <button className={`ui button ${color}`}>{language}</button>;
  }
  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <LanguageContext.Consumer>
            {({ language }) =>
              language === "english"
                ? this.renderButton(color, "Submit")
                : this.renderButton(color, "Voorleggen")
            }
          </LanguageContext.Consumer>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
