import React from "react";
import { BiTrophy } from "react-icons/bi";
import Event1 from "../../assets/images/event1.png";
import Event2 from '../../assets/images/event2.png';
import CustomButton from "../../components/common/button"

const Competition = () => {
  const ongoingCompetitions = [
    {
      title: "Green City Challenge",
      description: "Compete to build the most sustainable city!",
      prize: "10,000 DUN",
      image: Event1,
    },
    {
      title: "Eco Warriors",
      description: "Join the battle for a greener planet!",
      prize: "5,000 DUN",
      image: Event2,
    },
  ];

  const pastCompetitions = [
    {
      title: "Clean Energy Marathon",
      description: "Harness renewable energy and win big!",
      prize: "7,500 DUN",
      image: Event1,
    },
    {
      title: "Nature Conservation Challenge",
      description: "Preserve the natural world and earn rewards!",
      prize: "3,000 DUN",
      image: Event2,
    },
    {
      title: "Sustainable Innovators",
      description: "Showcase your eco-friendly inventions!",
      prize: "2,500 DUN",
      image: Event1,
    },
  ];

  return (
    <div className="w-full center bg-primary flex-col">
      <div className="flex-col center py-12 gap-8 w-full">
        <h2 className="text-white text-[2rem] oxanium mb-6">Ongoing Competitions</h2>
        {ongoingCompetitions.length > 0 ? (
          <div className="center gap-6 w-5/6">
            {ongoingCompetitions.map((competition, index) => (
              <div
                key={index}
                className="bgWalletGradient w-[30%] rounded-lg flex-col center"
              >
                <div
                  className="w-full h-56 bg-cover bg-center bg-no-repeat rounded-t-lg"
                  style={{ backgroundImage: `url(${competition.image})` }}
                ></div>
                <div className="w-5/6 mb-10 my-6">
                  <h3 className="oxanium text-lg text-white">
                    {competition.title}
                  </h3>
                  <p className="text-white mb-4 text-sm">{competition.description}</p>
                  <div className="flex items-center">
                    <BiTrophy className="mr-2 text-white" />
                    <p className="text-white">{competition.prize}</p>
                  </div>
                </div>
                <div className="w-5/6 pb-6">
                  <CustomButton backgroundColor="#fcb70c" textColor="#000000">Enter Competition</CustomButton>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No ongoing competitions at the moment.</p>
        )}
      </div>

      <div className="flex-col center py-12 gap-8 w-[90%]">
        <h2 className="text-white text-[2rem] oxanium mb-6">Past Competitions</h2>
        {pastCompetitions.length > 0 ? (
          <div className="center gap-6 w-5/6">
            {pastCompetitions.map((competition, index) => (
              <div
                key={index}
                className="bgWalletGradient w-[40%] rounded-lg flex-col center"
              >
                <div
                  className="w-full h-56 bg-cover bg-center bg-no-repeat rounded-t-lg"
                  style={{ backgroundImage: `url(${competition.image})` }}
                ></div>
                <div className="w-11/12 mb-10 my-6">
                  <h3 className="oxanium text-lg text-white">
                    {competition.title}
                  </h3>
                  <p className="text-white text-sm mb-4">{competition.description}</p>
                  <div className="flex items-center">
                    <BiTrophy className="mr-2 text-white" />
                    <p className="text-white">{competition.prize}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No past competitions available.</p>
        )}
      </div>
    </div>
  );
};

export default Competition;
