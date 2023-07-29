import React from "react";
// import { GoogleApiWrapper } from "google-maps-react";
import Banner5 from "../../img/banner5.png";
import Location from "../../img/location.png";
import "./Location.css";

class LocationMap extends React.Component {
    render() {
        return (
            <>
                <div className="w-85vw max-w-15/100 rounded-lg p-4 flex justify-center items-center">
                    <img src={Location} alt="Location" className="rounded-lg" />
                </div>
                <section className="mb-20 text-gray-800">
                    <div className="flex flex-wrap justify-center">
                        <div className="flex-initial shrink w-full xl:w-5/12 lg:w-6/12">
                            <div className="lg:py-12 lg:pl-6 mb-6 lg:mb-0">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-64.4100351!3d-31.7294921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x171ba1f406068069!2sPintureria%20Fadepa!5e0!3m2!1ses-419!2sar!4v1624523797308!5m2!1ses-419!2sar"
                                    className="h-80 w-full border-0 rounded-lg shadow-lg"
                                    allowFullScreen=""
                                    loading="lazy"></iframe>
                            </div>
                        </div>
                        <div className="flex-initial shrink w-full xl:w-7/12 lg:w-6/12 mb-6 md:mb-0 lg:-ml-12">
                            <div
                                className="bg-blue-600 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center py-12 lg:py-0 p-15"
                                style={{ zIndex: "-10" }}>
                                <div className="lg:pl-12">
                                    <h3 className="text-2xl font-semibold uppercase mb-6 pb-2">
                                        Contáctenos
                                    </h3>
                                    <h5 className="text-xl font-semibold mb-2">Dirección:</h5>
                                    <p className="mb-6">
                                        {" "}
                                        Ruta 5 - Esquina La Isla <br />
                                        Anisacate, Córdoba
                                    </p>
                                    <p>+54 351 306 1350</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-85vw max-w-15/100 rounded-lg p-6 flex justify-center items-center">
                            <img src={Banner5} alt="Banner5" className="rounded-lg" />
                        </div>
                    </div>
                </section>{" "}
            </>
        );
    }
}

// export default GoogleApiWrapper({
//     apiKey: "AIzaSyBsG72-Xkp2zyp68QlAwUlP2O-KA3OnTng",
// })(LocationMap);

export default LocationMap
