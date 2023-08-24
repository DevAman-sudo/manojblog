import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Loading from "../../components/Loading";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  // Location coordinates (Update with your desired location)
  const location = [27.5949378, 85.3085752];

  // Icon for the marker (You can replace this with your custom icon)
  const markerIcon = new Icon({
    iconUrl: "/location.png", // Update this with your custom icon path
    iconSize: [20, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay to demonstrate the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <div className="flex flex-col items-center justify-center min-h-screen bg-darkcolor text-white">
        <div className="max-w-lg w-screen mx-auto px-8 py-12 mt-8 lg:flex items-center justify-evenly">
          <div className="lg:w-full lg:mx-8">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <div className="bg-gray-800 p-6 rounded shadow-md mb-6 text-sm">
              <div className="flex items-center mb-4">
                <FaPhone className="w-6 h-6 mr-3" />
                <span>9864260127</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="w-6 h-6 mr-3" />
                <span>devaman.net@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-6 h-6 mr-3" />
                <span>chapagaun/ lalitpur</span>
              </div>
            </div>
          </div>
          <div className="rounded shadow-md mb-6 lg:w-[100%]">
            <div className="lg:flex">
              <div className="lg:w-screen z-1">
                <MapContainer
                  center={location}
                  zoom={13}
                  style={{
                    height: "400px",
                    width: "100%",
                    borderRadius: "0.375rem",
                  }}
                  className="w-full"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={location} icon={markerIcon}>
                    s
                  </Marker>
                </MapContainer>

                {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28287.636633588863!2d85.30857520957562!3d27.594937763865975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb16e96499a271%3A0xe67370cfd7c338d4!2sChapagaun%2044700!5e0!3m2!1sen!2snp!4v1690624238359!5m2!1sen!2snp"
                
                className="w-[100%] h-auto"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
              </div>
              <div className="lg:w-1/5">
                {/* Add any additional content you want to show alongside the map */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
