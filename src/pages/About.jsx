import React from 'react';
import "../styles/app.css";

const About = () => {
    const text = "Sed ut perspiciatis, consectetur adipiscing elit, ut et voluptates repudiandae sint et molestiae non recusandae.\n" +
        "\n" +
        "Sed ut perspiciatis, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, nisi ut aliquid ex ea commodi consequatur.\n" +
        "\n" +
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem?\n" +
        "\n" +
        "Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua! Itaque earum rerum hic tenetur a sapiente delectus, consectetur adipiscing elit, velit esse cillum dolore eu fugiat nulla pariatur. Itaque earum rerum hic tenetur a sapiente delectus, consectetur adipiscing elit, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi..."

    const header = "About us"
    return (
        <div className="textBox">
            <h1>{header}</h1>
            <p className="text">
                {text}
            </p>
        </div>
    )
};

export default About;