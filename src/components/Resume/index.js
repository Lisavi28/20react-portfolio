import './index.css';

const Resume = () => {
    const skills = [
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'JavaScript'},
        {name: 'React'},
        {name: 'Node.js'},
        {name: 'Express'},
        {name: 'MongoDB'},
        {name: 'MySQL'},
        {name: 'Git'},
        {name: 'Graphql'},
        
    ]


        const tools = [
            {name: 'Visual Studio Code'},
            {name: 'Git'},
            {name: 'Chrome DevTools'},
            {name: 'Npm'},
            {name: 'Heroku'},
            {name: 'Imsonia'},
            {name: 'Handlebars'},
            {name: 'NoSQL'}
          
        ]

    return (
        <section>
            <h2 className='title'>Resume</h2>
            <div className='box'>
                <h3>Proficiencies</h3>
                <div id='skills-div' className='row'>
                    <ul>
                        {skills.map((skill, index) => (
                            <li className='skill' key={index}>{skill.name}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <h2 className='title'>My tools</h2>
            <div className='box'>
                <div id='skills-div' className='row'>
                    <ul>
                        {tools.map((tool, index) => (
                            <li className='tool' key={index}>{tool.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;
