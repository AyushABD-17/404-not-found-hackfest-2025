import React from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  img: string;
};

const SupportTeam: React.FC<{ members: TeamMember[] }> = ({ members }) => (
  <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl overflow-hidden shadow-lg mb-6 text-white relative">
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-100">Meet Our Support Team</h2>
      <p className="text-gray-300 mb-6 text-sm sm:text-base">Our team of experienced professionals is here to make your event experience seamless and enjoyable.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100"; }}
              />
            </div>
            <h3 className="font-medium text-sm sm:text-base text-gray-100">{member.name}</h3>
            <p className="text-xs text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="inline-block px-5 py-2.5 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-200 text-sm font-medium transition duration-200 backdrop-blur-sm">
          Contact Support Team
        </button>
      </div>
    </div>
  </div>
);

export default SupportTeam;