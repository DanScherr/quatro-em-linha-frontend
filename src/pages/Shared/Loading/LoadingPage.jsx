import './LoadingPage.css'


export default function LoadingPage(  ) {
    return (
        <div className="container position-absolute top-50 start-50 translate-middle">
            <div className="row h100 justify-content-center align-items-center">
                <div className="col col-10" style={{textAlign: 'center'}}>
                    <div className="spinner-grow veryLightGreenLoader mx-1" role="status">
                        <span className="visually-hidden greenLoader">Loading...</span>
                    </div>
                    <div className="spinner-grow lightGreenLoader mx-1" role="status">
                        <span className="visually-hidden greenLoader">Loading...</span>
                    </div>
                    <div className="spinner-grow mainGreenLoader mx-1" role="status">
                        <span className="visually-hidden greenLoader ">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}