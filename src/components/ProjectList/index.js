import { useState } from 'react';

import './index.css';
import { formatTitle } from '../../utils/helpers';

const ProjectList = () => {

    const [projects] = useState([
        {
            name: 'shopping-smart',
            deploy: ' https://fathomless-bayou-71383.herokuapp.com/',
            problem_solved: 'Work up a interactive Full-Stack project.',
            technologies_used: 'JavaScript, Boostrap, Node.js, Handlebars, MsSQL, Heroku.',
        },
        {
            name: 'leisure-app',
            deploy: 'https://lisavi28.github.io/leisureapp/',
            problem_solved: 'Creation and development of interactive Front-End project ',
            technologies_used: 'JavaScript, jQuery, Client Side APIs, UI-Kit.',
        },
        {
            name: 'run-buddy',
            deploy: 'https://lisavi28.github.io/run-buddy/',
            problem_solved: 'I developed app for training.',
            technologies_used: 'HTML and CSS.',
        },
        {
            name: 'taskinator',
            deploy: 'https://lisavi28.github.io/taskinator/',
            problem_solved: 'I developed a task-tracker app ',
            technologies_used: 'HTML, CSS, JavaScript.',
        },
        {
            name: 'food-festival',
            deploy: 'https://lisavi28.github.io/food-festival/',
            problem_solved: 'Develop food app with offline capability.',
            technologies_used: 'Chrome Dev Tools and Google Ligthhouse, HTML, CSS, JavaScript.',
        },
        {
            name: 'weather-dashboard',
            deploy: 'https://lisavi28.github.io/Weather-Dashboard-/',
            problem_solved: 'I create a weather dashboard using Third-party APIs.',
            technologies_used: 'JavaScript, HTML, CSS, Client Side API.',
        }
    ])

    return (
        <div id='projects' className='row'>
            {projects.map((image, index) => (
                <div  className='project col-4'>
                    <h2>{formatTitle(image.name)}</h2>
                    <div>
                    <a className='project-links' href={image.deploy} target='_blank'>
                        <img
                            className='project_img'
                            src={require(`../../assets/images/${image.name}.PNG`)}
                            alt={image.name}
                            key={index}
                        />
                        </a>
                            <div className='row project_details'>
                            
                                <div className='col-10'>
                                    <p className='project-prob'>{image.problem_solved}</p>
                                </div>
                                <div className='col-10'>
                                    <p className='project-tech'>Tech Used: {image.technologies_used}</p>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default ProjectList;