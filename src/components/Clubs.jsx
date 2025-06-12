import React from "react";
import ClubCard from "./ClubCard";
const Clubs = () => {

    const clubData = [
        {
            image: "https://www.hackumbc.tech/hackumbcdog2025.png",
            name: "HackUMBC",
            description: "UMBC's annual hackathon planning committee",
            website: "https://www.hackumbc.tech"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Ri4wqNayfawSGubREHWalysimVrr1oCCeQ&s",
            name: "Cyber Dawgs",
            description: "UMBC cybersecurity team",
            website: "https://umbccd.umbc.edu/"
        },
                {
            image: "data:image/png;base64,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",
            name: "Student Government",
            description: "Student government",
            website: "https://sga.umbc.edu/"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB12IeahUJR79M_1aF_kBJiaLilHmFbHzE9A&s",
            name: "Student Events Board",
            description: "Student event planning committee",
            website: "https://seb.umbc.edu/"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGRT9PmOLTxHjilVjJ6QoezhpVUqO810pIw&s",
            name: "Fencing",
            description: "UMBC fencing team",
            website: "https://recreation.umbc.edu/club-sports/club-directory/fencing/"
        },
                {
            image: "https://assets1-my.umbc.edu/system/shared/avatars/groups/000/002/063/4ff47a28ca09766111000e151bbfdc13/xxxlarge.png?1693960754",
            name: "Cubers Club",
            description: "Learn to solve rubiks cubes",
            website: "https://my3.my.umbc.edu/groups/cubers"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KO8nZZZDNLGDoznM77lVXew19KYZ4ET2lA&s",
            name: "Paintball Club",
            description: "Play paintball",
            website: "https://my3.my.umbc.edu/groups/paintball"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPqadws228VovAnwAPNgcAXzmu4A3AbiCDA&s",
            name: "IEEE",
            description: "Electrical engineering group",
            website: "https://www2.umbc.edu/ieee/"
        },
                {
            image: "https://www.umbcissa.com/issa.png",
            name: "ISSA",
            description: "Informations systems group",
            website: "https://www.umbcissa.com/"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLQ-YeUnHr2cVNYotPt4rt8ouBAeRUqpADw&s",
            name: "AIAA",
            description: "Aeronautics club",
            website: "https://my3.my.umbc.edu/groups/umbcaiaa"
        },
                {
            image: "https://www.robotevents.com/uploads/team_regs/b6b573626fe810c1945e7fcb074a75d0.png?1736043267",
            name: "Robotics",
            description: "UMBC robotics team",
            website: "https://retrieverrobotics.umbc.edu/"
        },
    ]

    return ( 
        <div className = "clubs">
            {clubData.map((club, index) => (
                <ClubCard
                key={index}
                image={club.image}
                name={club.name}
                description={club.description}
                website={club.website}
                />
            ))}
        </div>
    ) }

export default Clubs;