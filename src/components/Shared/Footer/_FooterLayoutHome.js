import './_FooterLayoutHome.scss';

function FooterLayoutHome() {
    var fullYear = new Date();
    var year = fullYear.getFullYear();
    return (
        <footer className="bg-dark" id='FooterHome'>
            <div className="container-fluid">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'><small>©Todos los derechos reservados {year}</small></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterLayoutHome;
