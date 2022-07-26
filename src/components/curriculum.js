import './curriculum.scss';
import NavbarHome from './Shared/_NavbarLayoutHome';
import FooterHome from './Shared/Footer/_FooterLayoutHome';
import ImageUser from '../Image/User/Jefferson_Aguirre_photo.png';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Reveal from 'react-reveal/Reveal';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Curriculum() {
    const education = [
            {
                year: '2017-2021',
                tilte: 'Tecnología en desarrollo de software',
                duration: null,
                intitution: 'Intituto Superio de Patrimonio Yavirac'
            },
            {
                year:'2020',
                tilte: 'GUx: The evidence-Based Redesign',
                duration: '40h',
                intitution: 'Udemy'
            },
            {
                year:'2020',
                tilte: 'Marketing digital',
                duration: '40h',
                intitution: 'Google'
            },
            {
                year: '2017-2018',
                tilte: 'Licencia Profesional Tipo C',
                duration: null,
                intitution: 'Intituto Superio Mayor Pedro Travesari'
            },
            {
                year: '2017',
                tilte: 'Habilidades de vida',
                duration: '80h',
                intitution: 'CONQUITO'
            },
            {
                year: '2017',
                tilte: 'Atención al cliente y Marketing',
                duration: '20h',
                intitution: 'Coporación Lideres'
            },
            {
                year: '2017',
                tilte: 'Ofimática',
                duration: '28h',
                intitution: 'Infotraining'
            },
            {
                year: '2017',
                tilte: 'Cajero Comerciales',
                duration: '28h',
                intitution: 'Cámara de Comercio de Quito'
            }     
        ]

    const list = []

    for (const [i, stadies] of education.entries()) {
        list.push(

            <div className="momento">
                <div className='descripcion'>
                    <small><b>Año: {stadies.year}</b></small>
                    <div>
                        <h5><b>Titulo:</b> {stadies.tilte} </h5>
                        <h6><b>Intituión: </b>{stadies.intitution}</h6>
                        <h6 hidden={stadies.duration != null ? false : true}><b>Duración:</b> {stadies.duration}</h6>
                    </div>
                </div>
            </div>)
    }
    const skills = [
        {
            img: '../Image/Skills/html_and_css.svg',
            class: 'html-css',
            tilte: 'HTML/CSS',
            progress: 60,
            time: '2 AÑOS'
        },
        {
            img: '../Image/Skills/sass.svg',
            class: 'sass',
            tilte: 'Sass',
            progress: 30,
            time: '3 Meses'
        },
        {
            img: '../Image/Skills/wordpress.svg',
            class: 'wordpress',
            tilte: 'Wordpress',
            progress: 50,
            time: '6 Meses'
        },
        {
            img: '../Image/Skills/angular.png',
            class: 'angular',
            tilte: 'Angular clin',
            progress: 30,
            time: '1 Año'
        },
        {
            img: '../Image/Skills/react.png',
            class: 'react',
            tilte: 'React',
            progress: 20,
            time: '1 Mes'
        },
        {
            img: '../Image/Skills/js.svg',
            class: 'js',
            tilte: 'Javascript',
            progress: 50,
            time: '2 años'
        },    
    ]

        

    const skilList = []

    for (const [i, skill] of skills.entries()) {
        skilList.push(

            < div className = 'col-md-6' >
                {/* <img src={require("../Image/Skills/js.svg")}></img>*/}
                 
                <div className='content-info-progress'>
                    <div className='row'>
                        <div className='col-2'>
                        <div className={"img-content" + " " + skill.class}></div>
                        </div>
                        <div className='col-10'>
                            <div className='row'>
                                <div className='col-10'>
                                    <h5>{skill.tilte}</h5>
                                <small>{skill.time}</small>
                                </div>

                                <div className='col-2'>
                                    <h5 className='title-progress'>{skill.progress}%</h5>
                                </div>
                            </div>
                        
                            
                            
                            <ProgressBar className='progress' variant="pulper" now={skill.progress}  />
                        </div>
                    </div>
                </div>
            </div>)
    }
    return (
        <div id='componenrCurriculum'>
            <NavbarHome></NavbarHome>
            <div className="container-fluid" id='curriculum'>
                <div className='Container'>
                    <div className='row'>
                        <div className='col-lg-6 content-text-hero'>
                            <div>
                                <Slide left>
                                    <h1 DataText='Jefferson Aguirre' className='curriculum-title text-center'>Soy Jefferson Aguirre</h1>
                                    <h4 className='curriculum-subtitle text-center'>Desarrollador web</h4>
                                </Slide>
                            </div>
                            <div className='text-center'>
                                <br></br>
                                <div className='d-flex justify-content-center'>
                                    <a href='#about-as' id='btn-Continue-AboutAs' className='btn btno-secondary'>
                                        Continuar
                                    </a>
                                    <a href='https://walink.co/fbc0b6' target={'_blank'} id='btn-Contact-Me' className='btn btno-primary'>
                                        Contactar
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <Zoom>
                                <div className='text-center'>
                                    <img id='ImageUser' src={ImageUser}></img>
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id='about-as'>
                <div className='Container'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-6'>
                            <div>
                                <div className='containet-card'>
                                    <div className='card'>
                                        <div className='text-center img-content'>
                                            <img className='img-responsive img-circle img-avatar' src={ImageUser}></img>
                                            <h5 className='card-title text-center'>Jefferson Aguirre</h5>
                                            <small>Developer</small>
                                            <hr></hr>
                                        </div>
                                        
                                        <div className='text-center mb-2'>
                                            
                                            <small className='card-subtitle text-center'>jeffersonaguirre02@outlook.com</small><br></br>
                                            <small className='text-center'>+593 983684819</small>
                                        </div>
                                        <div className='text-center mb-2'>
                                            <a href='https://walink.co/fbc0b6' target={'_blank'} className='btn btno-secondary'>
                                                Contactar
                                            </a>
                                        </div>
                                        <div className='text-center'>
                                            <a href='https://firebasestorage.googleapis.com/v0/b/curriculum-60b8a.appspot.com/o/pdf%2FJefferson_Aguirre_Curriculum_PDF.pdf?alt=media&token=185c5eb3-e6ea-4c38-bc25-29b7b45fdbb9' target={'_blank'} className='btn btno-primary' disabled={true}>
                                               Descargar
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-6'>
                            <div id='contentAboutMeText'>
                            <Reveal effect="fadeInUp">
                                <h2>
                                    SOBRE ME
                                </h2>
                                </Reveal>
                                <div className='content-background-img-about-me'>
                                    <div className='text-content'>
                                        <h4>ASPIRACIONES PROFESIONALES</h4>
                                        <p>
                                            Busco aprender nuevas tecnologías y herramientas en todo tipo de ambientes laborales, donde me pueda desafiar profesionalmente cada día para convertir en el excelente desarrollador que deseo ser a futuro, trabajando en quipo es la manera más fácil para con seguir ese anhelado sueño que persigo como profesional.
                                        </p>
                                        <br></br>
                                        <h4>ASPIRACIONES PERSONALES</h4>
                                        <p>
                                            A un futuro me gustaría crea mi propio stratup, en tiendo que es un sueño cual lleva mucho esfuerzo y diciplina, para lograr mis metas me gustaría mucho poder trabajar en una organización cual me puede ayudar a convertirme en ese profesional y persona que me convertiré. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id='education'>
                <div>
                    <div className='row'>
                        <div className='col-md-5 col-lg-6 img-content-education'>
                        </div>
                        <div className='col-md-7 col-lg-6 info-content-education'>
                            
                            <div className='row'>
                                <div className='col-md-12 text-center education-title'>
                                    <h2>Educación</h2>
                                </div>
                            </div>
                            <br></br>
                            <div className='scroll-test'>
                                <div className="line">
                                    {list}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id='skills'>
                <div className='container'>
                    <div className='row'><h2>Habilidades</h2></div>
                    <div className='row'>
                    {skilList}
                    </div>
                </div>
            </div>
            <div className="container-fluid" id='projects'>
                <div className='container'>
                    <div className='content-proyects'>
                        <div className='row'>
                        <div className='col-12 text-center'>
                            <h2 className='title-project'>Proyectos</h2>
                        </div>
                        </div>
                        <br></br>
                        <div className='row'>
                            <div className='col-md-6 col-lg-4 text-center'>
                                <div className='card databits'>
                                    <div className='card-content'>
                                        <div className='card-title'>DATABITS</div>
                                        <div className='card-subtitle'><small>Wordpress</small></div>
                                        <div className='card-description'>Pagina: <a href='https://databits.ai' target={'_blank'}><b>https://databits.ai</b></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 text-center'>
                                <div className='card yavirac'>
                                    <div className='card-content'>
                                        <div className='card-title'>YAVIRAC</div>
                                        <div className='card-subtitle'><small>Full-start</small></div>
                                        <div className='card-description'>Pagina: <a href='https://yavirac.edu.ec/' target={'_blank'}><b>https://yavirac.edu.ec/</b></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 text-center'>
                                <div className='card goctors'>
                                    <div className='card-content'>
                                        <div className='card-title'>GOCTORS</div>
                                        <div className='card-subtitle'><small>Front-end</small></div>
                                        <div className='card-description'>Pagina: <a href='https://goctors.com/' target={'_blank'}><b>https://goctors.com/</b></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterHome></FooterHome>
        </div>
    );
}

export default Curriculum;